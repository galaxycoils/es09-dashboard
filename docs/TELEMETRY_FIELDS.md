# Target telemetry fields (from XBOT app UI)

Observed on ES09 Lite via **XBOT** app v3.4.5 (works when InvantiMobility is flaky).

These are the values we want our dashboard to show once the Nordic UART frames are reverse-engineered.

## Live / ride

| Field (app label) | Example | Unit / notes |
|-------------------|---------|--------------|
| Mileage for this journey | 0.0 | km (trip) |
| Total mileage | 897.2 | km |
| Current speed | 0.0 | km/h |
| Total driving time | 117H 36M 35S | lifetime |
| Current | 0.1 | A |
| Voltage | 39.2 | V |
| Power | 4.7 | W |
| Remaining power | -- | % (sometimes missing) |

## Temperatures

| Field | Example |
|-------|---------|
| Scooter temperature | 31.9 °C |
| Motor temperature | 24.4 – 27.2 °C |
| Battery temperature | -- (not always present) |

## Status / diagnostics

| Field | Example |
|-------|---------|
| Battery status | 0 |
| Error code | 0 |
| Warning code | 0 |

## Versions (read-only)

| Field | Example |
|-------|---------|
| Electronic control version | a3.4.0 (0512117c) |
| Association control version | -- |
| Bluetooth version | 0.c.c (0572) |
| App Version | 3.4.5 (XBOT) |

## Implications for our code

- Expand `ScooterState` beyond battery/speed/mode/lock to include voltage, current, power, temperatures, trip/total odometer, error/warning codes.
- Firmware versions can be parsed once and cached.
- XBOT and InvantiMobility both use BLE; our confirmed transport is still Nordic UART (`6E400001` / RX write / TX notify).
- **Still required:** raw TX notification hex dumps while XBOT (or Invanti) is connected, so we can map bytes → these fields.

## Capture tip with XBOT open

1. Connect with nRF Connect, enable TX Notify.
2. Open XBOT and connect to the scooter (or keep XBOT connected and watch nRF on a second phone if possible).
3. Change speed / mode / lock and note which hex changes when the Details screen updates.
