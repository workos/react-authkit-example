import { Box, Button, Card, Container, Flex, Theme } from "@radix-ui/themes";
import { Footer } from "./components/footer";
import { SignInButton } from "./components/sign-in-button";
import '@radix-ui/themes/styles.css';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
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
                        <Link href="/">Home</Link>
                      </Button>

                      <Button asChild variant="soft">
                        <Link href="/account">Account</Link>
                      </Button>
                    </Flex>

                    <SignInButton />
                  </header>
                </Flex>

                <Flex flexGrow="1" align="center" justify="center">
                  <main>{children}</main>
                </Flex>
              </Flex>
            </Card>
          </Box>
          <Footer />
        </Flex>
      </Container>
    </Theme>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href}>{children}</a>;
}
