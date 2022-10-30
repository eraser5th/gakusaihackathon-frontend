// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms: number): Promise<number> =>
  new Promise((res) => setTimeout(res, ms));

export type wrappedResult<T> = { read: () => T | undefined };

export const wrapPromise = <T>(promise: Promise<T>): wrappedResult<T> => {
  let status = "pending";
  let result: undefined | T;

  const suspender = promise.then(
    (r) => {
      status = "fulfilled";
      result = r;
    },
    (e) => {
      status = "rejected";
      result = e;
    }
  );

  const read = (): T | undefined => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "rejected") {
      throw result;
    } else {
      return result;
    }
  };

  return { read };
};
