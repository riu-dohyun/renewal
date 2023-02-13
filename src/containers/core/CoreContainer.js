import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as layoutActions from "src/store/layout.store";
import * as userActions from "src/store/user.store";
import * as commonUtils from "src/utils/commonUtils";

const CoreContainer = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { uid, email } = useSelector(state => state.user);

  const detectResize = () => {
    dispatch(layoutActions.setWindowWidth(window.innerWidth));
  };
  const getInfoTriggerFunc = () => {
    if (uid) {
      dispatch(userActions.getInfoTrigger({ uid, email, navigate }));
    }
  };

  useEffect(() => {
    detectResize();
    getInfoTriggerFunc();
    const setIntervalGetMyInfo = setInterval(() => {
      if (commonUtils.isLogin(uid)) {
        getInfoTriggerFunc();
      }
    }, 1000 * 10 * 10000000);

    return () => {
      clearInterval(setIntervalGetMyInfo);
    };
  }, []);

  useEffect(() => {
    if (window !== "undefined" && !window) {
      // page 이동 시 최상단 이동
      window.scrollTo(0, 0);
      dispatch(layoutActions.setMobileLnbActive(false));

      console.log(window.innerWidth);

      window.addEventListener("resize", detectResize);
      return () => {
        window.removeEventListener("resize", detectResize);
      };
    }
  }, []);

  return <></>;
};

export default CoreContainer;
