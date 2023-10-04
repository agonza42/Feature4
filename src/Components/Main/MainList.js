/* STATEFUL PARENT COMPONENT */
const MainList = ({ users }) => {
  return (
    <div>
      <hr />
      This is the main list stateless child component.
      <div>
        <p> User by ID: </p>
        {/* Check that the user object exists */}
        {users.length > 0 && (
          <ul>
            {/* Using getter for user Object to display name */}
            {users.map((user) => (
              <li key={"1" + user.id}>
                {" "}
                {user.id} | {user.get("username")}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default MainList;
