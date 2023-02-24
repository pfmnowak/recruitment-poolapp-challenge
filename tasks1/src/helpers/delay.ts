const delay = (time: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export default delay;
