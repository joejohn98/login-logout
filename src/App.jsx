import "./App.css";
import UserAuthentication from "./UserAuthentication";
import { AuthProvider } from "./UserContext";

function App() {
  return (
    <>
      <AuthProvider>
        <UserAuthentication />
      </AuthProvider>
    </>
  );
}

export default App;
