import { Box, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useUser } from "../hooks/use-user";
import { useAuth } from "@workos-inc/authkit-react";

export default function Account() {
  const user = useUser();
  const { role, organizationId } = useAuth();

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
