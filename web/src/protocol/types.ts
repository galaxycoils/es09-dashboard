export type ScooterMode = 'unknown' | 'eco' | 'drive' | 'sport';
export type CommandId =
  | 'requestStatus' | 'lock' | 'unlock'
  | 'setModeEco' | 'setModeDrive' | 'setModeSport'
  | 'lightsOn' | 'lightsOff';
export interface ScooterState {
  batteryPercent: number;
  voltageMv: number;
  speedKmh: number;
  mode: ScooterMode;
  locked: boolean;
  lightsOn: boolean;
  tripDistanceM: number;
  totalDistanceM: number;
  timestamp: number;
  valid: boolean;
}
export const EMPTY_STATE: ScooterState = {
  batteryPercent: 0, voltageMv: 0, speedKmh: 0, mode: 'unknown',
  locked: false, lightsOn: false, tripDistanceM: 0, totalDistanceM: 0,
  timestamp: 0, valid: false,
};
