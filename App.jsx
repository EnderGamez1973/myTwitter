import "./App.css";
import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from "./context/AuthContext";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/WidGets/Widgets";
const App = () => {
  return (
    <>
      <div className="MainApp">
        <SideBar />
        <Feed />
        <AuthProvider>
          <FormsFirebase />
        </AuthProvider>
      </div>
    </>
  );
};
export default App;
