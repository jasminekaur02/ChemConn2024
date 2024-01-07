// App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './Global.css'; // Import the global styles

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      {/* Add other components or sections as needed */}
    </div>
  );
};

export default App;
