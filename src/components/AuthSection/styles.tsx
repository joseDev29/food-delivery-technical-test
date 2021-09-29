import styled from "styled-components";

export const AuthSectionContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  align-items: center;
  padding: 0 24px;

  &.no-auth-row {
    justify-content: center;
  }

  &.auth-row {
    justify-content: space-between;
  }

  && .no-auth-text {
    font-size: 1.4rem;
    font-weight: 500;
    margin-right: 8px;
  }

  && .no-auth-icon {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  && .no-auth-icon:hover {
    cursor: pointer;
  }

  && .fb-icon {
    background-image: url("icons/facebook_icon.svg");
  }

  && .g-icon {
    margin-right: 8px;
    background-image: url("icons/google_icon.svg");
  }

  && .auth-user-image {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    object-fit: cover;
  }

  && .auth-username {
    font-size: 1.4rem;
    font-weight: 600;
  }

  && .auth-logout-btn {
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #d6d6c7;
  }

  && .auth-logout-btn:hover {
    cursor: pointer;
  }
`;
