import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import NavBar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box
        padding={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <Box p={8} borderRadius="lg" bg="white" textAlign="center" maxW="400px">
          <Heading size="xl" mb={4} color="red.500">
            Oops...
          </Heading>
          <Text fontSize="lg" mb={6} color="gray.600">
            {isRouteErrorResponse(error)
              ? "The page you're looking for doesn't exist."
              : "An unexpected error has occurred."}
          </Text>
          <Button variant="link" onClick={() => (window.location.href = "/")}>
            Return Home
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
