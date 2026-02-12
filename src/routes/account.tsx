import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useUser } from "../hooks/use-user";
import { useAuth } from "@workos-inc/authkit-react";
import { useState } from "react";

export default function Account() {
  const user = useUser();
  const { role, organizationId, getAccessToken, featureFlags, permissions } =
    useAuth();

  const [accessToken, setAccessToken] = useState<string | null>(null);

  if (!user) {
    return "...";
  }

  const userFields = [
    ["First name", user.firstName],
    ["Last name", user.lastName],
    ["Email", user.email],
    role ? ["Role", role] : [],
    ["Id", user.id],
    organizationId ? ["Organization Id", organizationId] : [],
    featureFlags ? ["Feature Flags", featureFlags.join(", ")] : [],
    permissions ? ["Permissions", permissions.join(", ")] : [],
  ].filter((arr) => arr.length > 0);

  return (
    <>
      <Flex direction="column" gap="2" mb="7">
        <Heading size="8" align="center">
          Account details
        </Heading>
        <Text size="5" align="center" color="gray">
          Below are your account details
        </Text>
      </Flex>

      {userFields && (
        <Flex direction="column" justify="center" gap="3" width="400px">
          <Flex asChild align="center" gap="6" key={"access-token"}>
            <label>
              <Text weight="bold" size="3" style={{ width: 100 }}>
                Access Token
              </Text>

              <Box flexGrow="1">
                {accessToken ? (
                  <TextField.Root value={accessToken || ""} readOnly />
                ) : (
                  <Button onClick={() => getAccessToken().then(setAccessToken)}>
                    Get Access Token
                  </Button>
                )}
              </Box>
            </label>
          </Flex>
          {userFields.map(([label, value]) => (
            <Flex asChild align="center" gap="6" key={value}>
              <label>
                <Text weight="bold" size="3" style={{ width: 100 }}>
                  {label}
                </Text>

                <Box flexGrow="1">
                  <TextField.Root value={value || ""} readOnly />
                </Box>
              </label>
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
}
