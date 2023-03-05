const delay = <T>(time: number) => {
  return new Promise<T>((resolve) => setTimeout(resolve, time));
};

export default delay;
