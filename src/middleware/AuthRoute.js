import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import url from "src/config/url";

const AuthRoute = props => {
  const { nextLoading } = useSelector(state => state.common);
  const router = useRouter();
  const { isAllowed, redirectPath = url.home, children } = props;
  useEffect(() => {
    if (!isAllowed && nextLoading) {
      router.push(redirectPath);
    }
  }, [isAllowed, nextLoading]);
  return children;
};

export default AuthRoute;
