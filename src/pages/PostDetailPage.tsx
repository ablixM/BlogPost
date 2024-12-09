import { useParams } from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Spinner,
  Image,
  HStack,
  Tag,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Icon,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = usePostDetail(id!);

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error || !post) throw error;

  return (
    <Container maxW="800px" paddingY={8}>
      {/* Back Button */}
      <Button
        leftIcon={<Icon as={IoArrowBack} />}
        variant="ghost"
        size="sm"
        marginBottom={4}
        onClick={() => navigate(-1)}
        color="gray.600"
        _hover={{ bg: "gray.100" }}
      >
        Back
      </Button>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        spacing="8px"
        separator="/"
        marginBottom={8}
        fontSize="sm"
        color="gray.500"
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Posts
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{post.results[0]?.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {post.results.map((post) => (
        <article key={post.id}>
          {/* Header Section */}
          <Box marginBottom={8}>
            <Heading as="h1" size="2xl" marginBottom={6} lineHeight="1.2">
              {post.title}
            </Heading>

            <HStack spacing={4} marginY={6}>
              <Box>
                <Text fontWeight="medium">{post.authorId}</Text>
                <HStack spacing={2} color="gray.600">
                  <Text fontSize="sm">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Text>
                  <Text>·</Text>
                  <Text fontSize="sm">
                    {Math.ceil(post.description.length / 200)} min read
                  </Text>
                </HStack>
              </Box>
            </HStack>

            <Tag size="md" colorScheme="gray" borderRadius="full" marginY={4}>
              {post.categories}
            </Tag>
          </Box>

          {/* Featured Image */}
          {post.images[0] && (
            <Box marginY={6}>
              <Image
                src={`http://localhost:5400/posts/images/${post.images[0]}`}
                alt={post.title}
                width="100%"
                height="400px"
                objectFit="cover"
                borderRadius="lg"
              />
            </Box>
          )}

          <Divider marginY={6} />

          {/* Content Section */}
          <Box
            fontSize="lg"
            lineHeight="1.8"
            color="gray.800"
            className="prose"
            maxW="100%"
          >
            <ExpandableText>{post.description}</ExpandableText>
          </Box>
        </article>
      ))}
    </Container>
  );
}

export default PostDetailPage;
