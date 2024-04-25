import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const routerError = useRouteError();
  console.log("🚀 ~ ErrorPage ~ routerError:", routerError);
  console.log(
    "🚀 ~ ErrorPage ~ isRouteError:",
    isRouteErrorResponse(routerError)
  );

  return (
    <>
      <h1>Oops...</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </>
  );
};

export default ErrorPage;
