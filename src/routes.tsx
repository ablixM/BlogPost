import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import ErrorPage from "./pages/ErrorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts/:id",
        element: <PostDetailPage />,
      },
    ],
  },
]);

export default router;
