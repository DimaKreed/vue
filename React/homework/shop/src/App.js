import './App.css';
import {connect, useSelector} from "react-redux";

function App(props) {

  //const cart=useSelector(state=>state.cart);//without destructuring

  const cart=useSelector(({cart})=>cart);//with destructuring
  const products=useSelector(({products})=>products);//with destructuring

  return (
   <div>
      <h1>text</h1>
   </div>
  );
}
export default App;
//export default connect(state=>{return {products:state.products}})(App);//connect version
