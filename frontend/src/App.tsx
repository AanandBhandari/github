import 'bulma/css/bulma.min.css';
import Axios from "axios";
import Routes from "./routes";
import ContextProvider from "./context";
import { API_URL } from "./utils/Constant";
function App() {
  Axios.defaults.baseURL = API_URL;
  return (
    <ContextProvider>
      <div className="container">
          <Routes />
      </div>
    </ContextProvider>
  );
}

export default App;
