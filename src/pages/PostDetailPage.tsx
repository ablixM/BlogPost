import { useParams } from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail";
import { Box, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

function PostDetailPage() {
  const { title } = useParams();
  const { data: post, isLoading, error } = usePostDetail(title!);
  if (isLoading)
    return (
      <>
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <Spinner />
        </Flex>
      </>
    );

  if (error || !post) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <Box>
        <Heading>{post.title}</Heading>
        <ExpandableText children={post.description} />
      </Box>
      <Box></Box>
    </SimpleGrid>
  );
}

export default PostDetailPage;
