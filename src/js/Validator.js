class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername(username = this.username) {
    let result = (username.search(/^[a-z][a-z_\d-]*[a-z]$/iug) !== -1);
    result = result && (username.search(/\d{4,}/iug) === -1);
    return result;
  }
}

export default Validator;
