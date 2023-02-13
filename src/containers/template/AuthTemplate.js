import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import url from "src/config/url";

const AuthTemplate = props => {
  const { children } = props;
  const { userType } = useSelector(state => state.user);
  const router = useRouter();
  const pathname = router.pathname;
  const [classFlag, setClassFlag] = useState(false);

  useEffect(() => {
    setClassFlag(pathname === url.auth.signUp && !userType);
  }, [userType]);

  return (
    <div className="flex h-full md:items-center">
      <div
        className={`w-full bg-white md:m-auto ${
          classFlag ? "md:max-w-4xl" : "md:max-w-md"
        } md:bg-transparent`}
      >
        <div className="rounded-lg bg-white p-4 pb-16 md:my-12 md:border md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
