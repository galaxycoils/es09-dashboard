# ES09 Lite Nordic UART Protocol

## Confirmed BLE Identity (from nRF Connect)

| Item | Value |
|------|-------|
| Device name | `5TH WHEEL ES09Lb` |
| Service | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` (Nordic UART) |
| RX (Write) | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` |
| TX (Notify) | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` |
| CCCD | `2902` |
| Extra | `FFF6` (Read) |
| Advertised | `FEFF` |

## Capture Procedure

1. nRF Connect -> connect to scooter -> Enable Notify on TX
2. Official InvantiMobility app connected (or use scooter controls)
3. Capture while: idle, mode change, lock/unlock, lights, short ride
4. Paste hex dumps into `shared/protocol-vectors/raw-captures/`
5. Read FFF6 and note value

## Frame format

**Pending real captures.** Do not invent. Parsers currently reject all frames.
