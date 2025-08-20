import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
// import HeaderPage from "./Components/HeaderPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { action as signUpAction } from "./Components/SignUp";
import { action as customerPageAction } from "./Components/CustomerPage";
import "./App.css";
import CustomerPage from "./Components/CustomerPage";
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
          element: <SignIn />,
        },
        {
          path: "/customer-page",
          element: <CustomerPage />,
          action: customerPageAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
