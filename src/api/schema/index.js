module.exports = `
  type Query {
    projects(search: String): [Project]
    project(id: ID!): Project
    users(search: String): [User]
    user(id: ID!): User
    me(accessToken: String): User
    budgets: [Budget]
    budget(slug: String): Budget
  }

  type Mutation {
      addSector(input: SectorInput): Sector
      addTransaction(input: TransactionInput): Transaction
  }

  type Project {
    id: ID!
    name: String!
    slug: String!
    description: String
    picture: String
    url: String
    cover_picture: String
    created_at: String
    updated_at: String
    budget: Budget
    responsible: User
  }

  type Budget {
      name: String!
      slug: String!
      description: String
      sectors: [Sector]
      created_at: String
      updated_at: String
  }

  input SectorInput {
      name: String
      budget: String
  }

  type Sector {
      name: String!
      slug: String!
      transactions: [Transaction]
  }

  input TransactionInput {
      wording: String
      description: String
      type: Boolean
      amount: Float
      budget: String
      sector: String
  }

  type Transaction {
      id: ID!
      wording: String
      description: String
      type: Boolean
      amount: Float
      created_at: String
  }

  type User {
    id: ID!
    username: String!
    email: String
    is_admin: Boolean
    created_at: String
    updated_at: String
    projects: [Project]
  }
`
