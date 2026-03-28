import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Flex justify="end" align="center" gap="3" py="5" height="10vh">
        <Button variant="outline">Login</Button>

        <Button variant="solid">Signup</Button>
      </Flex>
      <Flex
        direction="column"
        minHeight="90vh"
        align="center"
        justify="center"
        gap="3"
      >
        <Heading size="9">Task Manager</Heading>
        <Heading size="5">Welcome to the Task Manager</Heading>
      </Flex>
    </Box>
  );
}
