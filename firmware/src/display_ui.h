#pragma once
#include "protocol_parser.h"
void display_init();
void display_show_connecting();
void display_show_disconnected();
void display_update(const ScooterState& state);
