import { useScooter } from './hooks/useScooter';
import { Dashboard } from './components/Dashboard';
export default function App() {
  const { state, transport, error, connectWebBluetooth, connectBridge, send, disconnect } = useScooter();
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h1 className="text-lg font-semibold">ES09 Lite</h1>
        <span className="text-xs text-gray-500">{transport ?? 'disconnected'}</span>
      </header>
      <Dashboard state={state} />
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800 space-y-2">
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        {!transport ? (
          <div className="flex gap-2">
            <button onClick={connectWebBluetooth} className="flex-1 bg-blue-600 hover:bg-blue-500 rounded-xl py-3 font-medium">Web Bluetooth</button>
            <button onClick={() => connectBridge()} className="flex-1 bg-emerald-700 hover:bg-emerald-600 rounded-xl py-3 font-medium">ESP32 Bridge</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => send('lock')} className="flex-1 bg-gray-700 rounded-xl py-2">Lock</button>
            <button onClick={() => send('unlock')} className="flex-1 bg-gray-700 rounded-xl py-2">Unlock</button>
            <button onClick={disconnect} className="flex-1 bg-red-800 rounded-xl py-2">Disconnect</button>
          </div>
        )}
      </div>
    </div>
  );
}
