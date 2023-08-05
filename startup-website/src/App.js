import { Route, Routes } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import { ThemeProvider } from "./user/container/Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/*' element={<UserRoute />} />
        <Route path='/admin/*' element={<AdminRoute />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
