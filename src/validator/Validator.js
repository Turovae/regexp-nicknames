export default class Validator {
  static validateUsername(name) {
    return !/\d{4,}/.test(name) && /^[a-zA-Z][\w-]*[a-zA-Z]$/.test(name);
  }
}
