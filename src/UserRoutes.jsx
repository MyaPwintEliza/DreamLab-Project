import AppLayout from "./layouts/user/AppLayout";
import Home from "./pages/user/home";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;