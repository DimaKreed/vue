import Home from "../components/Home";
import JokesList from "../components/Jokes/JokesList";
import JokeInfo from "../components/Jokes/JokeInfo";
import JokesMainPage from "../components/Jokes/JokesMainPage";

export const routes = [
  {
    path: '',
    component: Home,
    name: 'Home'
  },
  {
    path: '/jokes',
    component: JokesMainPage,
    children: [
      {path: '', component: JokesList,name: 'JokesList'},
      {path: ':id', component: JokeInfo,name:'JokeInfo'}
    ]
  },

]
