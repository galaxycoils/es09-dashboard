#pragma once
#include "protocol_parser.h"
typedef void (*StateCallback)(const ScooterState& state);
void ble_init(StateCallback cb);
void ble_start_scan();
void ble_loop();
bool ble_is_connected();
bool ble_send_command(CommandId cmd);
void ble_disconnect();
