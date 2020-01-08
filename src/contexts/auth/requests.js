// You can set aditional headers outside this module
export const adicionalHeaders = {};

export default async function sendRequest({
  url,
  headers = {
    'Content-Type': 'application/json',
    ...adicionalHeaders,
  },
  body,
  method = 'GET',
  credentials = 'include',
  signal,
}) {
  const rawResponse = await fetch(url, {
    headers,
    body,
    method,
    credentials,
    signal,
  });

  return rawResponse;
}
