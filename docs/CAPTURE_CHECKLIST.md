# Protocol Capture Checklist (Task 1)

Do this on a phone with **nRF Connect** while the ES09 Lite is on.

## Setup

1. [ ] Scooter powered on
2. [ ] nRF Connect installed (Android preferred)
3. [ ] Scan and connect to `5TH WHEEL ES09Lb` (or similar)
4. [ ] Open Nordic UART Service
5. [ ] Enable **Notify** on TX characteristic  
   `6E400003-B5A3-F393-E0A9-E50E24DCCA9E`
6. [ ] Optional: also open official **InvantiMobility** app and connect

## Captures to collect (hex dumps from TX notifications)

| Scenario | Notes | Saved as |
|----------|-------|----------|
| Idle / battery screen | Stand still, note battery % on display | `battery-idle.json` |
| Mode Eco | Switch to Eco | `mode-eco.json` |
| Mode Drive | Switch to Drive | `mode-drive.json` |
| Mode Sport | Switch to Sport | `mode-sport.json` |
| Locked | Lock from app or key | `locked.json` |
| Unlocked | Unlock | `unlocked.json` |
| Lights on | | `lights-on.json` |
| Lights off | | `lights-off.json` |
| Moving (any speed) | Short ride, note speed on display | `speed-moving.json` |

Also:

- [ ] **Read** characteristic `FFF6` and record the value
- [ ] Note whether packets repeat periodically or only on change

## How to paste

Reply in chat with hex lines, e.g.:

```
battery idle ~80%:
AA 55 0A 01 50 ...

speed ~12 km/h:
AA 55 ...
```

Or add files under `shared/protocol-vectors/` and push.

Once we have 3+ real frames, Tasks 2–3 (TDD parsers) unlock.
