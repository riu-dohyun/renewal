import { Slide, toast } from "react-toastify";

export const initialValue = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000,
  hideProgressBar: false,
  draggablePercent: 60,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
};

export const curryToast =
  (initVal = initialValue) =>
  type =>
  text => {
    if (type === "error") {
      toast.error(text, initVal);
    } else if (type === "info") {
      toast.info(text, initVal);
    } else if (type === "success") {
      toast.success(text, initVal);
    } else if (type === "warning") {
      toast.warn(text, initVal);
    } else {
      toast(text, initVal);
    }
  };

export const errorToast = curryToast()("error");
export const infoToast = curryToast()("info");
export const successToast = curryToast()("success");
export const warningToast = curryToast()("warning");
export const defaultToast = curryToast()("default");
