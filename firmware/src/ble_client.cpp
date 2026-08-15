#include "ble_client.h"
#include "config.h"
#include <NimBLEDevice.h>
#include <Arduino.h>
static StateCallback g_cb = nullptr;
static bool g_connected = false;
static NimBLERemoteCharacteristic* g_rxChar = nullptr;
void ble_init(StateCallback cb) {
  g_cb = cb;
  NimBLEDevice::init("ES09-Dash");
  NimBLEDevice::setPower(ESP_PWR_LVL_P9);
}
void ble_start_scan() { Serial.println("[BLE] scan stub"); }
void ble_loop() {}
bool ble_is_connected() { return g_connected; }
bool ble_send_command(CommandId cmd) {
  if (!g_connected || !g_rxChar) return false;
  uint8_t buf[32];
  size_t n = build_command(cmd, buf, sizeof(buf));
  if (!n) return false;
  return g_rxChar->writeValue(buf, n, false);
}
void ble_disconnect() { g_connected = false; }
