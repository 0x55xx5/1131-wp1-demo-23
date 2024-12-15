import { useEffect, useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: " 912410023 kkkkk" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h3>Hello ,{user.name}</h3>
          <button
            className="btn"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <h3>Error ,login first</h3>
          <button
            className="btn"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
