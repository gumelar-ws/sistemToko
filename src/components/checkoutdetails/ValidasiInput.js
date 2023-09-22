export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidName(name) {
  return name.trim() !== '';
}

export function isValidPhoneNumber(phoneNumber) {
  return phoneNumber.trim() !== '';
}
