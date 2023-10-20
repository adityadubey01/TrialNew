import { useEffect, useState } from "react";

useOnline = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setCheckStatus(true);
    };

    const handleOffine = () => {
      setCheckStatus(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffine);
    };
  }, []);

  return checkStatus;
};

export default useOnline;
