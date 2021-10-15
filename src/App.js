import { Provider } from "react-redux";
import City from "./Components/City";
import store from "./store/store";
import Nav from "./Components/Nav";
import NavBotton from "./Components/NavBotton";


function App() {
  return (
      <Provider store={store}>
        <Nav />
        <City />
        <NavBotton/>
      </Provider>
  );
}

export default App;
