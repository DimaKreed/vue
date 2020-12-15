import Home from "../components/Home";
import JokesList from "../components/Jokes/JokesList";
import JokeItem from "../components/Jokes/JokeItem";

export const routes = [
  {
    path: '',
    component: Home,
    name: 'Home'
  },
  {
    path: '/jokes',
    component: JokesList,
    name: 'JokesList',
    props: true,
    children: [
      {path: '/jokes/:id', component: JokeItem,name:'JokeItem'}
    ]
  },
]
