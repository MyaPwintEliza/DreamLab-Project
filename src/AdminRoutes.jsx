import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/dashboard";
import Plan from "./pages/admin/plan";
import Category from "./pages/admin/category";
import Subscription from "./pages/admin/supscription";
import CreateSubscription from "./pages/admin/supscription/CreateSubscription";
import EditSubscription from "./pages/admin/supscription/EditSubscription";
import Login from "./pages/admin/login";
import Article from "./pages/admin/article";
import Register from "./pages/admin/register";
import ArticleAuthors from "./pages/admin/Authors/ArticleAuthors";
import BookAuthors from "./pages/admin/Authors/BookAuthors";
import CreateArticle from "./pages/admin/article/CreateArticle";
import EditArticle from "./pages/admin/article/EditArticle";

const AdminRoutes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "plans", element: <Plan /> },
      { path: "categories", element: <Category /> },

      {
        path: "authors",
        children: [
          { index: true, element: <ArticleAuthors /> },
          { path: "articleauthors", element: <ArticleAuthors /> },
          { path: "bookauthors", element: <BookAuthors /> },
        ],
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
