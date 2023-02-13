import { Navigate, Outlet } from "react-router-dom";
import url from "src/config/url";

const AuthRoute = props => {
  const { isAllowed, redirectPath = url.home, children } = props;
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default AuthRoute;
