#include <Arduino.h>
#include "config.h"
#include "protocol_parser.h"
#include "ble_client.h"
#include "display_ui.h"
#include "trip_logger.h"
#include "wifi_bridge.h"
static void onState(const ScooterState& s) {
  display_update(s);
  trip_logger_on_state(s);
  wifi_bridge_broadcast(s);
}
void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("\n=== ES09 Lite Dashboard (T-Display S3) ===");
  display_init();
  trip_logger_init();
  wifi_bridge_init();
  ble_init(onState);
  ble_start_scan();
}
void loop() {
  ble_loop();
  wifi_bridge_loop();
  delay(10);
}
