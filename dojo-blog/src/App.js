import Home from './Home';
import Navbar from './Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/create" element={<Create />} />
            <Route path="/blog" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
