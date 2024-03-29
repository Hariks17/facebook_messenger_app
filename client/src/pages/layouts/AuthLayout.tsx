import { Outlet } from "react-router-dom";
import { FullScreenCard } from "../../components/FullScreenCard";

const AuthLayout = () => {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowCard>Hi</FullScreenCard.BelowCard>
    </FullScreenCard>
  );
};

export default AuthLayout;
