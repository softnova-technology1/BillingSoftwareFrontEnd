import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
// import HeaderPage from "./Components/HeaderPage";
import SignUp from "./Components/SignUp";
import { action as signUpAction } from "./Components/SignUp";
import "./App.css";
import DashBoard from "./Components/DashBoard";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/sign-up",
          element: <SignUp />,
          action: signUpAction,
        },
        {
          path:'/DashBoard',
          element:<DashBoard/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
