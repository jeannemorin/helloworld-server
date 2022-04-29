export class UserModel {
  constructor(email) {
    this.users = []
  }

  create(user) {
    if (!this.findById(user.id)) {
      this.users.push(user)
      return 'User successfully created'
    } else return 'User already exists'
  }

  findById(id) {
    return this.users.find(user => user.id === id)
  }

  checkPassword(id, password) {
    var found = this.users.find(
      user => user.id === id && user.password === password
    )

    if (found != null) return 'The Password is correct'
    else return 'ERROR, Wrong Password'
  } // hint: make use of bcrypt to match password i.e: bcrypt.compare

  hashPassword(password) {
    return password
  } // hint: make use of bcrypt to hash password i.e: bcrypt.hash
}
