import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { message } = err?.error;
  const { status, statusText } = err;
  return (
    <div>
      <h1>OOps...</h1>
      <h2>Something went wrong...</h2>
      <h3>{message}</h3>
      <h3>{status + " " + statusText}</h3>
    </div>
  );
};

export default Error;
