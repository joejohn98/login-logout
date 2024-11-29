import { useAuth } from "./UserContext";

const UserAuthentication = () => {
  const { user, logIn, logOut } = useAuth();

  return (
    <div>
      <h2>User Authentication Example</h2>
      {user ? (
        <div>
          <p>
            <strong>Welcome, {user.userName}</strong>
          </p>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login</p>
          <button onClick={() => logIn({ userName: "user123" })}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserAuthentication;
