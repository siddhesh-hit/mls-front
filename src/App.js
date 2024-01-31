import { Provider } from "react-redux";
import "./App.css";
import Routesfile from "./Routesfile";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer />
        <Routesfile />
      </div>
    </Provider>
  );
}
export default App;
