import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import LoginScreen from "./login/LoginScreen";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
