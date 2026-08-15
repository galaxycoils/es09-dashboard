import { describe, it, expect } from 'vitest';
import { parseFrame, buildCommand } from '../../src/protocol/parser';
describe('parseFrame (stub)', () => {
  it('rejects empty frames', () => {
    expect(parseFrame(new Uint8Array(0))).toBeNull();
  });
});
describe('buildCommand (stub)', () => {
  it('produces at least 4 bytes', () => {
    expect(buildCommand('lock').length).toBeGreaterThanOrEqual(4);
  });
});
