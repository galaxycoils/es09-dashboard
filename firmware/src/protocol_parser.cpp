#include "protocol_parser.h"
#include <string.h>
bool parse_frame(const uint8_t* data, size_t len, ScooterState* out) {
  if (!data || !out || len < 2) return false;
  memset(out, 0, sizeof(*out));
  out->valid = false;
  return false; // stub until golden vectors
}
size_t build_command(CommandId cmd, uint8_t* buf, size_t bufsize) {
  if (!buf || bufsize < 4) return 0;
  buf[0]=0xAA; buf[1]=0x55; buf[2]=(uint8_t)cmd; buf[3]=0x00;
  return 4;
}
