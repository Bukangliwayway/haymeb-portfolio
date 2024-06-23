import {
  Button,
  Container,
  Heading,
  Html,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContentProps {
  email: string;
  description: string;
}

export default function Content({ email, description }: ContentProps) {
  return (
    <Html>
      <Container>
        <Heading my={5} as={"h3"}>
          Portfolio Contact Me
        </Heading>
        <Text>You have a new message from {email}</Text>
        <Text>{description}</Text>
      </Container>
    </Html>
  );
}
