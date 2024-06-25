import { Container, VStack, Heading, Text, Box, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaTrash } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("black", "white")}
    >
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
        <Button as={Link} to="/add-post" colorScheme="teal" size="md">Add New Post</Button>
        <VStack spacing={4} mt={8} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%" position="relative">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <IconButton
                aria-label="Delete Post"
                icon={<FaTrash />}
                size="sm"
                position="absolute"
                top="1rem"
                right="1rem"
                onClick={() => handleDelete(index)}
              />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;