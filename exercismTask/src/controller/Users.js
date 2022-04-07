const httpStatus = require("http-status");
const UserService = require("../services/user");

const userService = new UserService();

class Users {
  // User object, but in the following I used the mocks.json as a database
  static users = {
    name: "Adam",
    owes: {
      Bob: 12.0,
      Chuck: 4.0,
      Dan: 9.5,
    },
    owed_by: {
      Bob: 6.5,
      Dan: 2.75,
    },
    balance: "<(total owed by other users) - (total owed to other users)>",
  };

  async get(users) {
    var mock = fetch("mocks.json");
    const response = await mock;
    return response.json;
  }

  // Try to implement the get request
  async getUser(req, res) {
    const { userId } = req.params;
    const result = await userService.getUser(userId);
    res.status(httpStatus.OK).send(result);
  }
}
