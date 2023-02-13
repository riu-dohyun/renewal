import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "src/store/user.store";
import * as toastUtils from "src/utils/toastUtils";

const EmailTimer = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  // const [classNames, setClassNames] = useState("");
  const { timeOver } = useSelector(state => state.user);
  const dispatch = useDispatch();
  if (!timeOver) {
    useEffect(() => {
      const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) < 1) {
            dispatch(userAction.setEmailTimeOver());
            toastUtils.warningToast("time over");
            clearInterval(countdown);
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(countdown);
      };
    }, [minutes, seconds]);
  }

  return (
    <>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </>
  );
};

export default EmailTimer;
