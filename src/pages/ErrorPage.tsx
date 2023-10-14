import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../NavBar";
import { Box, Heading, Text } from "@chakra-ui/layout";

const ErrorPage = () => {
  const error = useRouteError();
  const isPathInvalid = isRouteErrorResponse(error);
  return (
    <div>
      <NavBar />
      <Box padding={8}>
        <Heading>Oops</Heading>
        <Text>
          {isPathInvalid ? "This page does not exist" : "Technical Error"}
        </Text>
      </Box>
    </div>
  );
};

export default ErrorPage;
