import { useRouteError } from "react-router-dom";

function Error() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-red-600">Oops!</h1>
      <p className="mb-2 text-lg text-gray-800">Something went wrong.</p>
      <p className="mb-6 text-sm text-gray-600">
        {error.status} {error.statusText || error.message}
      </p>
      <a
        href="/"
        className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
      >
        Go to Home
      </a>
    </div>
  );
}

export default Error;
