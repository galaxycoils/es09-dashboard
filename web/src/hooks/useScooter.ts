import { useState, useCallback, useRef } from 'react';
import type { ScooterState, CommandId } from '../protocol/types';
import { EMPTY_STATE } from '../protocol/types';
import { WebBluetoothClient } from '../ble/webBluetooth';
import { BridgeClient } from '../ble/bridgeClient';
type Transport = 'webbluetooth' | 'bridge' | null;
export function useScooter() {
  const [state, setState] = useState<ScooterState>(EMPTY_STATE);
  const [transport, setTransport] = useState<Transport>(null);
  const [error, setError] = useState<string | null>(null);
  const btRef = useRef<WebBluetoothClient | null>(null);
  const bridgeRef = useRef<BridgeClient | null>(null);
  const connectWebBluetooth = useCallback(async () => {
    setError(null);
    try {
      const client = new WebBluetoothClient();
      await client.connect(setState);
      btRef.current = client;
      setTransport('webbluetooth');
    } catch (e: any) { setError(e.message || 'Web Bluetooth failed'); }
  }, []);
  const connectBridge = useCallback((url = 'ws://192.168.4.1:81/ws') => {
    setError(null);
    const client = new BridgeClient();
    client.connect(url, setState);
    bridgeRef.current = client;
    setTransport('bridge');
  }, []);
  const send = useCallback(async (cmd: CommandId) => {
    if (transport === 'webbluetooth') await btRef.current?.send(cmd);
    else if (transport === 'bridge') bridgeRef.current?.send(cmd);
  }, [transport]);
  const disconnect = useCallback(() => {
    btRef.current?.disconnect();
    bridgeRef.current?.disconnect();
    btRef.current = null;
    bridgeRef.current = null;
    setTransport(null);
    setState(EMPTY_STATE);
  }, []);
  return { state, transport, error, connectWebBluetooth, connectBridge, send, disconnect };
}
