import { checkName } from "../src/client/js/checkName"


test('Test input URL validity', () => {
    expect(checkName('some string')).toBeTruthy();
    expect(checkName(55)).toBeFalsy();
    expect(checkName('$2314nj jn545 %%$$$ ')).toBeFalsy();
    expect(checkName('')).toBeFalsy();
  })