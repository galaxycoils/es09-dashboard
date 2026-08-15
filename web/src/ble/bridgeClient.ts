import type { ScooterState, CommandId } from '../protocol/types';
export type StateHandler = (s: ScooterState) => void;
export class BridgeClient {
  private ws: WebSocket | null = null;
  private onState: StateHandler | null = null;
  connect(url: string, onState: StateHandler): void {
    this.onState = onState;
    this.ws = new WebSocket(url);
    this.ws.onmessage = (ev) => {
      try {
        const state = JSON.parse(ev.data) as ScooterState;
        if (state.valid && this.onState) this.onState(state);
      } catch { /* ignore */ }
    };
  }
  send(cmd: CommandId): void { this.ws?.send(JSON.stringify({ cmd })); }
  disconnect(): void { this.ws?.close(); this.ws = null; }
  get connected(): boolean { return this.ws?.readyState === WebSocket.OPEN; }
}
