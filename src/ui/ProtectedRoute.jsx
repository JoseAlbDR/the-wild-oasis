import { useNavigate } from "react-router-dom";
import { useGetUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { styled } from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoadingUser, isAuthenticated } = useGetUser();

  // 2. If there is NO authenticaded user, redirect to the /login
  //
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser)
      navigate("/login", { replace: true });
  }, [isAuthenticated, navigate, isLoadingUser]);

  // 3. WHile loading, show a spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
