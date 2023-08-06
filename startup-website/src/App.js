import { Route, Routes } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import { ThemeProvider } from "./user/container/Context/ThemeContext";
import { IntroProvider } from "./user/container/Context/IntroContext";

function App() {
  return (
    <ThemeProvider>
      <IntroProvider>
        <Routes>
          <Route path='/*' element={<UserRoute />} />
          <Route path='/admin/*' element={<AdminRoute />} />
        </Routes>
      </IntroProvider>
    </ThemeProvider>
  );
}

export default App;
