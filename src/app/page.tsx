import Link from "next/link";

export default function Welcome() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5 mt-5">Welcome!</h1>
        <p className="text-xl mb-5">
          This is your simple todo app to manage your tasks.
        </p>
        <Link href="/login">
          <button className="px-4 py-2 bg-pink-500 text-white rounded">
            Go to Login
          </button>
        </Link>  
      </div>
    )
  }