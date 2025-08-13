import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
// import HeaderPage from "./Components/HeaderPage";
import SignUp from "./Components/SignUp";
import "./App.css";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
