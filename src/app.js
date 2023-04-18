export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUser() {
    if (/^[a-z][\w-]*[a-z]$/i.test(this.nickname)) {
      return !/\d{4,}/.test(this.nickname);
    }
    return false;
  }
}
