import { formatTitle } from './utils';

describe('utils', () => {
  it('should work', () => {
    expect(formatTitle('title')).toEqual('TITLE');
  });
});
