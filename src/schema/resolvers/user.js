const resolvers = {
  Query: {
    async user (root, { id }, { models }) {
      return models.User.findByPk(id)
    },
    async users (root, args, { models }) {
      return models.User.findAll()
    }
  },
  Mutation: {
    async createUser(root, { username, firstName, lastName, password }, { models }) {
      return models.User.create({ username, firstName, lastName, password })
    }
  }
}

export default resolvers
