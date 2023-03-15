import AppLayout from "./layouts/user/AppLayout";
import Home from "./pages/user/home/index.jsx";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
