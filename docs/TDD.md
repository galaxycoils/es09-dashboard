# TDD Rules for ES09 Dashboard

## Seams under test

1. **Protocol parser** (C++ and TypeScript)  
   - Public: `parse_frame` / `parseFrame`, `build_command` / `buildCommand`  
   - Source of truth: golden vectors in `shared/protocol-vectors/`

2. **Command framing**  
   - Same vectors round-trip where applicable

3. **Web unit tests**  
   - `web/tests/protocol/parser.test.ts` via Vitest  
   - Run: `cd web && npm test`

4. **Firmware unit tests**  
   - `firmware/test/test_protocol_parser.cpp` via PlatformIO native  
   - Run: `cd firmware && pio test -e native`

## Loop

1. Add or update a golden vector (known hex + expected fields)
2. Write failing test that asserts the expected decode
3. Run tests → red
4. Minimal parser change → green
5. Keep C++ and TS parsers in lock-step in the same commit

## Do not

- Invent frame layouts without captures
- Test internal helpers instead of public seams
- Advance UI/BLE “live decode” until parsers pass real vectors
