import type { ScooterState, CommandId } from '../protocol/types';
import { parseFrame, buildCommand } from '../protocol/parser';
const NUS_SERVICE = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const NUS_RX = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const NUS_TX = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
export type StateHandler = (s: ScooterState) => void;
export class WebBluetoothClient {
  private device: BluetoothDevice | null = null;
  private rxChar: BluetoothRemoteGATTCharacteristic | null = null;
  private onState: StateHandler | null = null;
  async connect(onState: StateHandler): Promise<void> {
    if (!navigator.bluetooth) throw new Error('Web Bluetooth not supported');
    this.onState = onState;
    this.device = await navigator.bluetooth.requestDevice({
      filters: [{ namePrefix: '5TH WHEEL ES09' }],
      optionalServices: [NUS_SERVICE],
    });
    const server = await this.device.gatt!.connect();
    const service = await server.getPrimaryService(NUS_SERVICE);
    this.rxChar = await service.getCharacteristic(NUS_RX);
    const txChar = await service.getCharacteristic(NUS_TX);
    await txChar.startNotifications();
    txChar.addEventListener('characteristicvaluechanged', (ev) => {
      const value = (ev.target as BluetoothRemoteGATTCharacteristic).value;
      if (!value) return;
      const state = parseFrame(new Uint8Array(value.buffer));
      if (state && this.onState) this.onState(state);
    });
  }
  async send(cmd: CommandId): Promise<void> {
    if (!this.rxChar) throw new Error('Not connected');
    await this.rxChar.writeValueWithoutResponse(buildCommand(cmd));
  }
  disconnect(): void {
    this.device?.gatt?.disconnect();
    this.device = null;
    this.rxChar = null;
  }
  get connected(): boolean { return !!this.device?.gatt?.connected; }
}
