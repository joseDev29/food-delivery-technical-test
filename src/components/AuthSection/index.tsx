import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AuthSectionContainer } from "./styles";

export const AuthSection = () => {
  const { signInWithFacebook, signInWithGoogle, logOut, onChangeAuth, user } =
    useAuth();

  useEffect(() => {
    onChangeAuth();
  }, [onChangeAuth]);

  return (
    <AuthSectionContainer className={`${user ? "auth-row" : "no-auth-row"}`}>
      {user ? (
        <>
          <img
            className="auth-user-image"
            src={`${user.image}`}
            alt="user profile image"
          />
          <h4 className="auth-username">{user.name}</h4>
          <span className="auth-logout-btn" onClick={logOut}>
            Logout
          </span>
        </>
      ) : (
        <>
          <p className="no-auth-text">Login with</p>
          <span
            className="no-auth-icon g-icon"
            onClick={signInWithGoogle}
          ></span>
          <p className="no-auth-text">or</p>
          <span
            className="no-auth-icon fb-icon"
            onClick={signInWithFacebook}
          ></span>
        </>
      )}
    </AuthSectionContainer>
  );
};
