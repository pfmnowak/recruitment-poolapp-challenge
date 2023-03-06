import delay from "./delay";

describe("delay function", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("should not resolve until timeout has elapsed", async () => {
    const spy = jest.fn();
    delay(100).then(spy); // <= resolve after 100ms

    jest.advanceTimersByTime(20); // <= advance less than 100ms
    await Promise.resolve(); // let any pending callbacks in PromiseJobs run
    expect(spy).not.toHaveBeenCalled(); // SUCCESS

    jest.advanceTimersByTime(80); // <= advance the rest of the time
    await Promise.resolve(); // let any pending callbacks in PromiseJobs run
    expect(spy).toHaveBeenCalled(); // SUCCESS
  });
});
