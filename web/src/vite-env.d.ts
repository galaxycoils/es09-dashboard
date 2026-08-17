/// <reference types="vite/client" />

// Minimal Web Bluetooth typings so the project typechecks without @types/web-bluetooth
interface BluetoothDevice {
  readonly gatt?: BluetoothRemoteGATTServer;
  readonly name?: string;
}
interface BluetoothRemoteGATTServer {
  connect(): Promise<BluetoothRemoteGATTServer>;
  getPrimaryService(service: string): Promise<BluetoothRemoteGATTService>;
  readonly connected: boolean;
  disconnect(): void;
}
interface BluetoothRemoteGATTService {
  getCharacteristic(characteristic: string): Promise<BluetoothRemoteGATTCharacteristic>;
}
interface BluetoothRemoteGATTCharacteristic extends EventTarget {
  startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
  writeValueWithoutResponse(value: BufferSource): Promise<void>;
  readonly value?: DataView;
}
interface Bluetooth {
  requestDevice(options: {
    filters?: Array<{ namePrefix?: string; name?: string; services?: string[] }>;
    optionalServices?: string[];
  }): Promise<BluetoothDevice>;
}
interface Navigator {
  bluetooth?: Bluetooth;
}
