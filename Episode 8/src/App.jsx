import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        refetchOnWindowFocus : false
      }
    }
  });

  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <nav style={{ backgroundColor: "white", padding: 15 }}>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>

          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider >
    </>
  )
}

export default App
