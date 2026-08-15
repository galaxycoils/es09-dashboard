#pragma once
#include "protocol_parser.h"
void trip_logger_init();
void trip_logger_on_state(const ScooterState& s);
void trip_logger_start();
void trip_logger_end();
