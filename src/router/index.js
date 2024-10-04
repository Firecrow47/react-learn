import Login from "../pages/Login";
import About from "../pages/About";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoute = [
    {path: "/", element: <Posts />, exact:true},
    {path: "/login", element: <Posts />, exact:true},
    {path: "/about", element: <About />, exact:true},
    {path: "/posts", element: <Posts />, exact:true},
    {path: "/posts/:id", element: <PostPage />, exact:true},
    {path: "/*", element: <Error />, exact:true},
]

export const publicRoutes = [
    {path: "/login", element: <Login />, exact:true},
    {path: "/*", element: <Login />, exact:true},
    {path: "/", element: <Login />, exact:true}
]