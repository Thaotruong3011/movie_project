export function startLoading() {
  return {
    type: "START_LOADING",
  };
}
export function stopLoading() {
  return {
    type: "STOP_LOADING",
  };
}
export function redirectRequest(link) {
  return {
    type: "REDIRECT",
    payload: link,
  };
}
