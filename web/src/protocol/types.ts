export type ScooterMode = 'unknown' | 'eco' | 'drive' | 'sport';

export type CommandId =
  | 'requestStatus'
  | 'lock'
  | 'unlock'
  | 'setModeEco'
  | 'setModeDrive'
  | 'setModeSport'
  | 'lightsOn'
  | 'lightsOff';

/**
 * Target state aligned with XBOT Details screen + basic controls.
 * Fields stay optional-ish via 0 / false until protocol RE fills them.
 */
export interface ScooterState {
  // Ride
  speedKmh: number;
  tripDistanceKm: number;
  totalDistanceKm: number;
  totalDriveTimeSec: number;

  // Electrical
  batteryPercent: number; // remaining power when available
  voltageV: number;
  currentA: number;
  powerW: number;
  batteryStatus: number;

  // Thermal
  scooterTempC: number;
  motorTempC: number;
  batteryTempC: number; // NaN or 0 if unknown

  // Mode / security
  mode: ScooterMode;
  locked: boolean;
  lightsOn: boolean;

  // Diagnostics
  errorCode: number;
  warningCode: number;

  // Versions (cached after first read)
  ecuVersion: string;
  bleVersion: string;

  timestamp: number;
  valid: boolean;
}

export const EMPTY_STATE: ScooterState = {
  speedKmh: 0,
  tripDistanceKm: 0,
  totalDistanceKm: 0,
  totalDriveTimeSec: 0,
  batteryPercent: 0,
  voltageV: 0,
  currentA: 0,
  powerW: 0,
  batteryStatus: 0,
  scooterTempC: 0,
  motorTempC: 0,
  batteryTempC: 0,
  mode: 'unknown',
  locked: false,
  lightsOn: false,
  errorCode: 0,
  warningCode: 0,
  ecuVersion: '',
  bleVersion: '',
  timestamp: 0,
  valid: false,
};
