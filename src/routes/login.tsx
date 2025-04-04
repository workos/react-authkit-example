import { useAuth } from "@workos-inc/authkit-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/use-user";

const Login = () => {
  const navigate = useNavigate();

  const { isLoading, signIn } = useAuth();
  const user = useUser();
  const search = window.location.search;

  console.log('LOGIN')

  useEffect(() => {
    const prepareState = () => {
      if (user) {
        console.log('%cHARD REDIRECT TO /', 'font-weight:bold;color:orange')
        navigate("/");
      } else {
        console.log("User not found");
        const searchParams = new URLSearchParams(search);
        const context = searchParams.get("code") ?? undefined;
        console.log('%cSIGN IN WITHOUT STATE', 'font-weight:bold;color:orange', context);
        // signIn({ context });
      }
    };

    prepareState();
  }, [navigate, search, signIn, user]);

  if (isLoading || !user) return <div>Loading...</div>;

  return null;
};

export default Login;
