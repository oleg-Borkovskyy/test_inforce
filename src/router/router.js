import Home from "../Pages/Home";
import ProductIdPage from "../Pages/ProductIdPage";


export const privateRoutes=[
    {path:'/home', component:Home, exact:true },
    {path:'/home/:id', component:ProductIdPage, exact:true }
];
 export const publicRoutes=[
//     {path:'/login', component:LogIn, exact:true },
 ];