export default class Validator {
  static validateUsername(name) {
    if (/\d{4,}/.test(name)) {
      return false;
    }
    return /^[a-zA-Z][\w-]*[a-zA-Z]$/.test(name);
  }
}
