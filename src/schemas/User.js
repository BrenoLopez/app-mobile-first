export default class Users {
    static schema = {
      name: "Users",
      primaryKey: "id",
      properties: {
        id: { type: 'int', indexed: true },
        name: 'string'
      }
    }
  }