import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/dashboard";
import Plan from "./pages/admin/plan";
import Subscription from "./pages/admin/subscription";
import CreateSubscription from "./pages/admin/subscription/CreateSubscription";
import EditSubscription from "./pages/admin/subscription/EditSubscription";
import Login from "./pages/admin/login";
import Register from "./pages/admin/register";
import SubscriberIndex from "./pages/admin/subscriber";
import AllSubscribers from "./pages/admin/subscriber/AllSubscribers";
import RequestSubscriber from "./pages/admin/subscriber/RequestSubscriber";
import ActiveSubscriber from "./pages/admin/subscriber/ActiveSubscribers";
import ExpiredSubscriber from "./pages/admin/subscriber/ExpiredSubscriber";

const AdminRoutes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "plans", element: <Plan /> },
      {
        path: "subscribers",
        element: <SubscriberIndex />,
        children: [
          { index: true, element: <AllSubscribers /> },
          { path: "request", element: <RequestSubscriber /> },
          { path: "active", element: <ActiveSubscriber /> },
          { path: "expired", element: <ExpiredSubscriber /> },
        ],
      },
      {
        path: "subscription",
        children: [
          { index: true, element: <Subscription /> },
          { path: "create", element: <CreateSubscription /> },
          { path: "edit/:id", element: <EditSubscription /> },
        ],
      },
    ],
  },
  {
    path: "login",
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/register",
    children: [{ index: true, element: <Register /> }],
  },
];

export default AdminRoutes;
