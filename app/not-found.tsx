// pages/404.js

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-4">Oops! Page not found.</p>
      <a href="/" className="text-blue-500 underline">Go back home</a>
    </div>
  );
}
