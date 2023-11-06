import AuthForm from "@/components/auth-form";
import getCurrentUser from "@/lib/session";
import Link from "next/link";

export default async function Login() {
  const user = await getCurrentUser()
  return (
    <div>
      {user ? (
        <button>
          <Link href={'/dashboard'}>
            Go to dashboard
          </Link>
        </button>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}
