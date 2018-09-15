import { sum } from '../account';

it('calculates as expected', () => {
    const __sum = sum(2, 3)
    expect(__sum).toBe(5)
  });