const json = require('../src/server/mockAPI');

test('check mockAPI content at server side', () => {

    expect(json.title).toBe('test json response for server testing');
    expect(json.message).toContain('testing');
    expect(json.time).toHaveLength(4);

});