#pragma once
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#ifdef __cplusplus
extern "C" {
#endif
typedef enum { MODE_UNKNOWN=0, MODE_ECO, MODE_DRIVE, MODE_SPORT } ScooterMode;
typedef enum {
  CMD_REQUEST_STATUS=0, CMD_LOCK, CMD_UNLOCK,
  CMD_SET_MODE_ECO, CMD_SET_MODE_DRIVE, CMD_SET_MODE_SPORT,
  CMD_LIGHTS_ON, CMD_LIGHTS_OFF
} CommandId;
typedef struct {
  uint8_t  batteryPercent;
  uint16_t voltageMv;
  float    speedKmh;
  ScooterMode mode;
  bool     locked;
  bool     lightsOn;
  uint32_t tripDistanceM;
  uint32_t totalDistanceM;
  uint32_t timestampMs;
  bool     valid;
} ScooterState;
bool parse_frame(const uint8_t* data, size_t len, ScooterState* out);
size_t build_command(CommandId cmd, uint8_t* buf, size_t bufsize);
#ifdef __cplusplus
}
#endif
