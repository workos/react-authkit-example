import { Button, Flex } from "@radix-ui/themes";
import { useAuth } from "@workos-inc/authkit-react";

export function SignInButton({ large }: { large?: boolean }) {
  const { user, isLoading, signIn, signOut } = useAuth();

  if (user) {
    return (
      <Flex gap="3">
        <Button onClick={signOut} size={large ? "3" : "2"}>
          Sign Out
        </Button>
      </Flex>
    );
  }

  return (
    <Button
      onClick={() => {
        signIn();
      }}
      size={large ? "3" : "2"}
      disabled={isLoading}
    >
      Sign In {large && "with AuthKit"}
    </Button>
  );
}
