import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  CardBody,
  CardFooter,
  Text,
  Image,
  SimpleGrid,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import usePost from "../hooks/usePosts";
import ExpandableText from "../components/ExpandableText";

function PostsPage() {
  const { data } = usePost();
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        marginY={2}
      >
        {data?.results.map((post) => (
          <GridItem maxHeight={"700px"} w="100%">
            <Card>
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar src="https://bit.ly/broken-link" />

                    <Box>
                      <Link as={Heading} size={"xsm"}>
                        {post.title}
                      </Link>
                      <Text>{post.createdAt}</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
              </CardHeader>
              {post.images.map((image, index) => (
                <Image
                  key={index}
                  objectFit="cover"
                  src={`http://192.168.100.147:5400/posts/images/${image}`}
                  alt="Chakra UI"
                  maxW={"200px"}
                />
              ))}
              <CardBody>
                <Text fontSize={"sm"}>
                  {<ExpandableText children={post.description} />}
                </Text>
              </CardBody>
              {/* <Image
              objectFit="cover"
              src={post.images}      alt="Chakra UI"
            /> */}

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              ></CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default PostsPage;
