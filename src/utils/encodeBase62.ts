export function encodeBase62(code: number) {
  const BASE62 =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  if (code === 0) {
    return BASE62[0];
  }
  let result = '';

  while (code > 0) {
    const remainder = code % 62;
    result = BASE62[remainder] + result;
    code = Math.floor(code / 62);
  }

  return result;
}
