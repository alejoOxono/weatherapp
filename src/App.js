import { Provider } from "react-redux";
import City from "./Components/City";
import store from "./store/store";


function App() {
  return (
      <Provider store={store}>
        <City />
      </Provider>
  );
}

export default App;
