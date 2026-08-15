# Architecture

## High-level

Scooter (NUS) <--BLE--> T-Display S3 (BLE Central + TFT + Soft-AP + WS)
                              |
                              +-- WebSocket --> Browser (iOS / restricted)
Scooter (NUS) <--Web Bluetooth--> Browser (Chrome/Android)

## Shared protocol contract

- `ScooterState` and `CommandId` exist in both C++ and TypeScript.
- `parse_frame` / `parseFrame` must stay semantically identical.
- Golden vectors in `shared/protocol-vectors/` are the single source of truth.
