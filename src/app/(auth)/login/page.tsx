import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <p className="text-lg font-semibold text-gray-900 mb-8">Gradschool</p>

      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Sign in</h1>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full h-10 px-3 border border-gray-200 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors duration-150"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            className="w-full h-10 px-3 border border-gray-200 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors duration-150"
          />
        </div>

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password
          </Link>
        </div>

        <button
          type="submit"
          className="w-full h-10 bg-gray-900 text-white rounded-md hover:bg-gray-800 font-medium mt-2 transition-colors duration-150"
        >
          Sign in
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-6">
        No account yet?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
