import type { ScooterState } from '../protocol/types';
export function Dashboard({ state }: { state: ScooterState }) {
  if (!state.valid) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p className="text-xl">No live data</p>
        <p className="text-sm mt-2">Connect via Web Bluetooth or ESP32 bridge</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 p-4 max-w-md mx-auto">
      <div className="col-span-2 bg-gray-900 rounded-2xl p-6 text-center">
        <div className="text-6xl font-bold tracking-tighter">{state.speedKmh.toFixed(0)}</div>
        <div className="text-gray-400 text-sm">km/h</div>
      </div>
      <div className="bg-gray-900 rounded-xl p-4">
        <div className="text-3xl font-semibold">{state.batteryPercent}%</div>
        <div className="text-gray-400 text-xs">Battery</div>
      </div>
      <div className="bg-gray-900 rounded-xl p-4">
        <div className="text-2xl font-semibold uppercase">{state.mode}</div>
        <div className="text-gray-400 text-xs">Mode</div>
      </div>
      <div className="bg-gray-900 rounded-xl p-4">
        <div className="text-xl">{state.locked ? 'LOCKED' : 'OPEN'}</div>
        <div className="text-gray-400 text-xs">Lock</div>
      </div>
      <div className="bg-gray-900 rounded-xl p-4">
        <div className="text-xl">{state.lightsOn ? 'ON' : 'OFF'}</div>
        <div className="text-gray-400 text-xs">Lights</div>
      </div>
    </div>
  );
}
