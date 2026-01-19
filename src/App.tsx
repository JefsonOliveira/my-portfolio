import React, { useEffect } from "react";
import Home from "./pages/Home/Home";

const App = () => {
  useEffect(() => {
    // ✅ impede o browser de restaurar o scroll antigo
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // ✅ força o topo ao montar
    window.scrollTo(0, 0);

    // ✅ força de novo no próximo frame (garante em casos chatos)
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, []);

  return <Home />;
};

export default App;
