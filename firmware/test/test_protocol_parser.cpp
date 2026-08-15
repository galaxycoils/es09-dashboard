#include <unity.h>
#include "../src/protocol_parser.h"
void test_parse_rejects_empty() {
  ScooterState s;
  TEST_ASSERT_FALSE(parse_frame(nullptr, 0, &s));
}
void test_build_command_min_size() {
  uint8_t buf[4];
  TEST_ASSERT_TRUE(build_command(CMD_LOCK, buf, sizeof(buf)) >= 4);
}
void setUp() {}
void tearDown() {}
int main() {
  UNITY_BEGIN();
  RUN_TEST(test_parse_rejects_empty);
  RUN_TEST(test_build_command_min_size);
  return UNITY_END();
}
