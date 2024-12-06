import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  CardFooter,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  Tag,
} from "@chakra-ui/react";

import usePost from "../hooks/usePosts";
import ExpandableText from "../components/ExpandableText";
import { Link } from "react-router-dom";
import PostSkeleton from "../components/PostSkeleton";

function PostsPage() {
  const { data, isLoading } = usePost();
  return (
    <Grid
      templateColumns="1fr"
      gap={6}
      marginY={2}
      maxWidth="800px"
      mx="auto"
      padding={4}
    >
      {isLoading ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : (
        data?.results.map((post) => (
          <>
            <GridItem key={post.id} w="100%">
              <Card maxW="100%" height="100%" shadow="none" border="none">
                <CardHeader padding={0}>
                  <Flex gap="4" alignItems="center" marginBottom={3}>
                    <Avatar size="sm" src="https://bit.ly/broken-link" />
                    <Text fontWeight="medium" fontSize="sm">
                      {}
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </Flex>
                </CardHeader>

                <Flex gap={4} alignItems="center" flexDirection="row">
                  <Box>
                    <Heading
                      as={Link}
                      to={"/posts/" + post.title}
                      size="md"
                      marginBottom={2}
                    >
                      {post.title}
                    </Heading>
                    <Tag
                      marginX={2}
                      color="gray.600"
                      fontSize="sm"
                      marginBottom={4}
                    >
                      {post.categories}
                    </Tag>
                    <Box flex="1">
                      <Text fontSize="sm" noOfLines={3} color="gray.600">
                        <ExpandableText children={post.description} />
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    {post.images[0] && (
                      <Image
                        src={`http://localhost:5400/posts/images/${post.images[0]}`}
                        alt="Post thumbnail"
                        width="550px"
                        height="150px"
                        objectFit="cover"
                      />
                    )}
                  </Box>
                </Flex>

                <CardFooter
                  padding={0}
                  marginTop={4}
                  justify="space-between"
                  alignItems="center"
                ></CardFooter>
              </Card>
            </GridItem>
            <Divider />
          </>
        ))
      )}
    </Grid>
  );
}

export default PostsPage;
