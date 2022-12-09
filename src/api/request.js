import request from './core';

export async function get(url) {
  return await request
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function post(url, body) {
  return await request
    .post(url, body)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function patch(url, body) {
  return await request.patch(url, body).catch((error) => error);
}