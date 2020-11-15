import { DummyDatabase } from './dummy-database';

describe('DummyDatabase', () => {
  it('should create an instance', () => {
    expect(new DummyDatabase()).toBeTruthy();
  });
});
