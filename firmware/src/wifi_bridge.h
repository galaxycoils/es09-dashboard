#pragma once
#include "protocol_parser.h"
void wifi_bridge_init();
void wifi_bridge_loop();
void wifi_bridge_broadcast(const ScooterState& s);
