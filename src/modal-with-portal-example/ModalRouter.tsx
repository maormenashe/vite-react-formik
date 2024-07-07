import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Modal from "./Modal";

const Home: React.FC = () => <h2>Home</h2>;
const About: React.FC = () => <h2>About</h2>;

const ModalRoutes: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    // Open modal on certain routes
    if (location.pathname === "/about") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>About Modal</h2>
        <p>
          This modal opens automatically when you navigate to the About page.
        </p>
      </Modal>
    </div>
  );
};

const ModalRouter: React.FC = () => (
  <Router>
    <ModalRoutes />
  </Router>
);

export default ModalRouter;
