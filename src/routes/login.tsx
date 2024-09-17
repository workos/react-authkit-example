import { useAuth } from "@workos-inc/authkit-react";
import { useSearchParams } from "react-router-dom";

export default function Login() {
  const { signIn } = useAuth();
  const [params] = useSearchParams();
  const context = params.get("context") ?? undefined;
  signIn({ context });
  return null;
}
