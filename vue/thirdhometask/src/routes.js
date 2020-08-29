import Home from "./components/Home";
import Contacts from "./components/Contacts";
import MyProjects from "./components/myProjects/MyProjects";

export const routes=[
  {
    path:'',component:Home
  },
  {
    path:'/contacts',component:Contacts
  },
  {
    path:'/myProjects',component:MyProjects
  },
]