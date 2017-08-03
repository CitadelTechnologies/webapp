module.exports = `
  type Query {
    projects(search: String): [Project]
    project(id: ID!): Project
    users(search: String): [User]
    user(id: ID!): User
  }

  type Project {
    id: ID!
    name: String!
    description: String
    picture: String
    cover_picture: String
    created_at: String
    updated_at: String
    responsible: User
  }

  type User {
    id: ID!
    username: String!
    email: String
    created_at: String
    updated_at: String
    projects: [Project]
  }
`
