#include "wifi_bridge.h"
#include <Arduino.h>
void wifi_bridge_init() { Serial.println("[WiFi] bridge stub"); }
void wifi_bridge_loop() {}
void wifi_bridge_broadcast(const ScooterState& s) { (void)s; }
