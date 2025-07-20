import { useRouteError } from 'react-router-dom';

function Error() {
   const error: any = useRouteError();
   console.error(error);

   return (
      <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100">
         <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
         <p className="text-lg text-gray-800 mb-2">Something went wrong.</p>
         <p className="text-sm text-gray-600 mb-6">
            {error.status} {error.statusText || error.message}
         </p>
         <a
            href="/"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
         >
            Go to Home
         </a>
      </div>
   );
}

export default Error;
