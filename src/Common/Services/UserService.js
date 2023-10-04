import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new user with username, password, and email
export const createUser = (Name, Password, Email) => {
  console.log("Creating User:", Name);
  const User = Parse.Object.extend("User");
  const user = new User();
  
  // Using setter to UPDATE the object
  user.set("username", Name);
  user.set("password", Password);
  user.set("email", Email);

  return user.save().then((result) => {
    // Returns new User object
    return result;
  });
};

// READ operation - get user by ID
export const getById = (id) => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  return query.get(id).then((result) => {
    // return User object with objectId: id
    return result;
  });
};

export let Users = {};
Users.collection = [];

// READ operation - get all users in Parse class User
export const getAllUsers = () => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  return query.find().then((results) => {
    // returns array of User objects
    console.log(results)
    return results;
  });
};

// DELETE operation - remove user by ID
export const removeUser = (id) => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  return query.get(id).then((user) => {
    user.destroy();
  });
};
