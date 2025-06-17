import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="bg-dark text-white text-center d-flex align-items-center"
      style={{
        backgroundImage: `url('/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        position: 'relative',
      }}
    >
      <div className="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2rem', borderRadius: '10px' }}>
        <h1 className="display-4">Affordable Health Help for All</h1>
        <p className="lead">AI-powered insights and real-time support at your fingertips.</p>
        <a href="#" className="btn btn-success btn-lg mt-3">
          Start Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
