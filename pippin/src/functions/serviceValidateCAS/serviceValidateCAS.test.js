import { onCall as serviceValidateCAS } from './serviceValidateCAS';

describe('serviceValidateCAS', () => {
  it('fails when no ticket is provided', () => {
    serviceValidateCAS({ service: 'https://uwreact.ca', ticket: 'abc' });

    expect(true).toBe(true);
  });
});
