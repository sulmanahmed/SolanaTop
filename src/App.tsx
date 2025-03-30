import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import PageLoader from "./components/shared/page-loader";
const HomeComponent = lazy(() => import("./layout/layout"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <HomeComponent />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
