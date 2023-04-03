import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/dashboard";
import Plan from "./pages/admin/plan";
import Category from "./pages/admin/category";
import Subscription from "./pages/admin/subscription";
import CreateSubscription from "./pages/admin/subscription/CreateSubscription";
import EditSubscription from "./pages/admin/subscription/EditSubscription";
import Login from "./pages/admin/login";
import Article from "./pages/admin/article";
import ArticleAuthors from "./pages/admin/Authors/ArticleAuthors";
import BookAuthors from "./pages/admin/Authors/BookAuthors";
import CreateArticle from "./pages/admin/article/CreateArticle";
import EditArticle from "./pages/admin/article/EditArticle";
import Books from "./pages/admin/Books";
import CreateBook from "./pages/admin/Books/CreateBook";
import EditBook from "./pages/admin/Books/EditBook";
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
      { path: "categories", element: <Category /> },

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
        path: "authors",
        children: [
          { index: true, element: <ArticleAuthors /> },
          { path: "articleauthors", element: <ArticleAuthors /> },
          { path: "bookauthors", element: <BookAuthors /> },
        ],
      },
      { path: "books", 
        children: [
          { index: true, element: <Books />}, 
          { path: "create", element: <CreateBook /> },
          { path: "edit/:slug", element: <EditBook /> },
        ] 
      },
      {
        path: "subscriptions",
        children: [
          { index: true, element: <Subscription /> },

          { path: "create", element: <CreateSubscription /> },
          { path: "edit/:id", element: <EditSubscription /> },
        ],
      },
      {
        path: "articles",
        children: [
          { index: true, element: <Article /> },
          { path: "create", element: <CreateArticle /> },
          { path: "edit/:slug", element: <EditArticle /> },
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
