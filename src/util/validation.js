export function nameCheck(value) {
  if (value.trim().length > 0) {
    return true;
  }
  return false;
}
export function phoneNumberCheck(value) {
  if (value.trim().length === 10) {
    return true;
  }
  return false;
}
export function emailCheck(value) {
  return value
    .trim()
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi);
}
export function passwordCheck(value) {
  if (value.trim().length >= 7) {
    return true;
  }
  return false;
}
export function confirmPasswordCheck(value, password) {
  if (value.trim() === password) {
    return true;
  }
  return false;
}
