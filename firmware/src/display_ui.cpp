#include "display_ui.h"
#include <TFT_eSPI.h>
static TFT_eSPI tft;
void display_init() {
  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.setCursor(10, 10);
  tft.println("ES09 Dashboard");
  tft.setTextSize(1);
  tft.println("Waiting for BLE...");
}
void display_show_connecting() {
  tft.fillScreen(TFT_BLACK);
  tft.setCursor(10, 60);
  tft.setTextSize(2);
  tft.println("Connecting...");
}
void display_show_disconnected() {
  tft.fillScreen(TFT_BLACK);
  tft.setCursor(10, 60);
  tft.setTextSize(2);
  tft.setTextColor(TFT_RED, TFT_BLACK);
  tft.println("Disconnected");
}
void display_update(const ScooterState& s) {
  if (!s.valid) return;
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(3);
  tft.setCursor(10, 20);
  tft.printf("%.0f km/h", s.speedKmh);
  tft.setTextSize(2);
  tft.setCursor(10, 70);
  tft.printf("Bat %u%%", s.batteryPercent);
  tft.setCursor(10, 100);
  const char* mode = "UNK";
  if (s.mode == MODE_ECO) mode = "ECO";
  else if (s.mode == MODE_DRIVE) mode = "DRV";
  else if (s.mode == MODE_SPORT) mode = "SPT";
  tft.printf("Mode %s  %s", mode, s.locked ? "LOCK" : "OPEN");
}
