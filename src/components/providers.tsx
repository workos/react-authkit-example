import { AuthKitProvider } from "@workos-inc/authkit-react";
import { memo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const clientId = import.meta.env.VITE_WORKOS_CLIENT_ID;
const apiHostname=import.meta.env.VITE_WORKOS_API_HOSTNAME;

const Providers = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <AuthKitProvider
      clientId={clientId}
      apiHostname={apiHostname}
      redirectUri={`${window.location.origin}/login`}
      devMode={false}
      onRedirectCallback={({ state }) => {
        if (state?.returnTo) {
          navigate(state.returnTo);
        }
      }}
    >
      {children}
    </AuthKitProvider>
  );
};

export default memo(Providers);
