import AppLayout from "./layouts/user/AppLayout";
import Home from "./pages/user/home/index.jsx";
import Pricing from "./pages/user/pricing/index";
import Payment from "./pages/user/pricing/payment";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/pricing",
        children: [
          { index: true, element: <Pricing /> },
          { path: "purchase/:id", element: <Payment /> },
        ],
      },
    ],
  },
];

export default routes;
