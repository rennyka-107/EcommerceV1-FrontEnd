import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/style/style.scss";
import Login from "./Redux/Connect/login.connect";
import RouteList from "./Route";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux";
import { Suspense } from "react";
import Loading from "./Components/Loading";
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Suspense fallback={<Loading />}>
              <Route path="/" component={RouteList} />
            </Suspense>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
