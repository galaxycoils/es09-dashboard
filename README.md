# ES09 Lite Dashboard

Custom live dashboard + trip logger for the **Invanti / 5th Wheel ES09 Lite** e-scooter.

## Components

| Path | Description |
|------|-------------|
| `firmware/` | PlatformIO project for **LillyGO T-Display S3** (ESP32-S3-R8) |
| `web/` | Vite + React + TypeScript Web Bluetooth dashboard |
| `shared/protocol-vectors/` | Golden test vectors (fill after nRF Connect capture) |
| `docs/protocol.md` | Reverse-engineered Nordic UART protocol notes |

## Hardware

- Scooter: Invanti ES09 Lite (Nordic UART Service)
- Display board: LillyGO T-Display S3 (1.9" ST7789 170×320, WiFi + BLE 5)

## Quick Start (after protocol vectors exist)

### Firmware
```bash
cd firmware
pio run -e tdisplay_s3 -t upload
pio device monitor
```

### Web
```bash
cd web
npm install
npm run dev
```

## Protocol status

Nordic UART UUIDs confirmed. Frame format and commands **pending live capture**.
See `docs/protocol.md` for the exact nRF Connect procedure.

## Architecture

```
Scooter (NUS)  <---BLE--->  T-Display S3 (BLE Central + TFT + Soft-AP + WS)
                              |
                              +--- WebSocket --->  Browser (iOS / restricted)
Scooter (NUS)  <---Web Bluetooth--->  Browser (Chrome/Android)
```
