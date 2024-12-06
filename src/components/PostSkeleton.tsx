import {
  Card,
  CardHeader,
  Flex,
  Box,
  Skeleton,
  SkeletonCircle,
  GridItem,
  Divider,
} from "@chakra-ui/react";

function PostSkeleton() {
  return (
    <GridItem w="100%">
      <Card maxW="100%" height="100%" shadow="none" border="none">
        <CardHeader padding={0}>
          <Flex gap="4" alignItems="center" marginBottom={3}>
            <SkeletonCircle size="8" />
          </Flex>
        </CardHeader>

        <Flex gap={4} alignItems="center" flexDirection="row">
          <Box flex="1">
            <Skeleton height="24px" width="200px" marginBottom={2} />
            <Skeleton height="20px" width="150px" marginBottom={4} />
            <Box>
              <Skeleton height="60px" />
            </Box>
          </Box>
          <Box>
            <Skeleton width="150px" height="150px" />
          </Box>
        </Flex>
      </Card>
      <Divider marginTop={4} />
    </GridItem>
  );
}

export default PostSkeleton;
