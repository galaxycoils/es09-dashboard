import type { ScooterState, CommandId } from './types';
export function parseFrame(bytes: Uint8Array): ScooterState | null {
  if (!bytes || bytes.length < 2) return null;
  return null; // stub until golden vectors
}
export function buildCommand(cmd: CommandId): Uint8Array {
  const buf = new Uint8Array(4);
  buf[0] = 0xaa; buf[1] = 0x55;
  const map: Record<CommandId, number> = {
    requestStatus: 0, lock: 1, unlock: 2,
    setModeEco: 3, setModeDrive: 4, setModeSport: 5,
    lightsOn: 6, lightsOff: 7,
  };
  buf[2] = map[cmd] ?? 0;
  buf[3] = 0;
  return buf;
}
export function hexToBytes(hex: string): Uint8Array {
  const clean = hex.replace(/\s+/g, '');
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
  return out;
}
