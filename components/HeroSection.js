// HeroSection.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <animated.div style={props} className="hero-section">
      <div>
        <h1>IIChE ChemCon 2024</h1>
        <p>Welcome to the premier conference on chemical engineering!</p>
        <p>
          <Button variant="primary">Register Now</Button>
        </p>
      </div>
    </animated.div>
  );
};

export default HeroSection;
