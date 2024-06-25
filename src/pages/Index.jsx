import { Container, VStack, Heading, Text, Box, Image } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <VStack spacing={2}>
          <Text fontSize="md">Connect with me:</Text>
          <Box>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" m={1} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={1} />
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" m={1} />
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;