import { Box, Button, Card, Container, Flex, Theme } from "@radix-ui/themes";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import Providers from "../components/providers";
import { SignInButton } from "../components/sign-in-button";

export default function Layout() {
  return (
    <Providers>
      <Theme
        accentColor="iris"
        panelBackground="solid"
        style={{ backgroundColor: "var(--gray-1)" }}
      >
        <Container style={{ backgroundColor: "var(--gray-1)" }}>
          <Flex direction="column" gap="5" p="5" height="100vh">
            <Box asChild flexGrow="1">
              <Card size="4">
                <Flex direction="column" height="100%">
                  <Flex asChild justify="between">
                    <header>
                      <Flex gap="4">
                        <Button asChild variant="soft">
                          <Link to="/">Home</Link>
                        </Button>

                        <Button asChild variant="soft">
                          <Link to="/account">Account</Link>
                        </Button>
                      </Flex>

                      <SignInButton />
                    </header>
                  </Flex>

                  <Flex flexGrow="1" align="center" justify="center">
                    <main>
                      <Outlet />
                    </main>
                  </Flex>
                </Flex>
              </Card>
            </Box>
            <Footer />
          </Flex>
        </Container>
      </Theme>
    </Providers>
  );
}
