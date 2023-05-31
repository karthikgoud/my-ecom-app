import { toast } from "react-toastify";

const ToastHandler = (type, message) => {
  console.log("toast", type, message);
  if (type === "error") {
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "warn") {
    toast.warn(message, {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "info") {
    toast.info(message, {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export { ToastHandler };
