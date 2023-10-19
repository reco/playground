export function api(url: string) {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error("API error: ", error));
}
