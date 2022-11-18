import Home from "./components/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Popular from "./pages/Popular";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0 });
  }, [location.pathname]);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Provider store={store}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Search/:name" element={<Search />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
