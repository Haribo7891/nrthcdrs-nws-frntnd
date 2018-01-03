import React from 'react';

import { Navbar, Footer, SwitchRoutes } from '../components';

const App = () => (
  <div className="app container-fluid">
    <Navbar />
    <SwitchRoutes />
    <Footer />
  </div>
);

export default App;
