#include "trip_logger.h"
#include <Arduino.h>
static bool active = false;
static float maxSpeed = 0;
static uint32_t startMs = 0;
void trip_logger_init() { Serial.println("[Trip] ready"); }
void trip_logger_on_state(const ScooterState& s) {
  if (!s.valid) return;
  if (!active && s.speedKmh > 1.0f) trip_logger_start();
  if (active && s.speedKmh > maxSpeed) maxSpeed = s.speedKmh;
}
void trip_logger_start() {
  active = true; maxSpeed = 0; startMs = millis();
  Serial.println("[Trip] started");
}
void trip_logger_end() {
  if (!active) return;
  active = false;
  Serial.printf("[Trip] ended max=%.1f duration=%lus\n", maxSpeed, (millis()-startMs)/1000);
}
