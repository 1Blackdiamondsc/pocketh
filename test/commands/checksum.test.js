const cli = require('../../src/utils/cli.js');

describe('checksum command', () => {

  test('Should checksum an address', async () => {
    const result = await cli('checksum', '0xbccc714d56bc0da0fd33d96d2a87b680dd6d0df6');
    expect(result.stdout).toContain('0xbCcc714d56bc0da0fd33d96d2a87b680dD6D0DF6');
  });

  test('Should complain when an invalid address is provided', async () => {
    const result = await cli('checksum', '0xbccc714d56bc0da0fd');
    expect(result.code).toBe(1);
  });
});
