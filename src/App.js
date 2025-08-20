import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
// import HeaderPage from "./Components/HeaderPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { action as signUpAction } from "./Components/SignUp";
import "./App.css";
import CustomerPage from "./Components/CustomerPage";
import CustomerEntry from "./Components/CustomerEntry";
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
          path: "/sign-in",
          element: <SignIn />
        },
        {
          path: "/customer-page",
          element: <CustomerPage />
        },
        {
          path: "/customer-entry",
          element: <CustomerEntry />
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
