import Home from "../components/Home";
import JokesList from "../components/JokesList";
import JokeItem from "../components/JokeItem";

export const routes=[
  {
    path:'',component:Home
  },
  {
    path:'/jokes',component:JokesList

  },
  {
    path:'/jokes/:id',component:JokeItem

  }
]
