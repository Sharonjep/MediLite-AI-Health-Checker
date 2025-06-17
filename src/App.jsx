import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [formData, setFormData] = useState({ name: '', age: '', symptoms: '' });
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState({
    contactName: '',
    contactEmail: '',
    contactMessage: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://mijxobdh63.execute-api.us-west-2.amazonaws.com/prod/MediliteSymptomChecker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('API call failed');
      const result = await response.json();
      setAiResponse(result.response);
    } catch (error) {
      console.error('API call failed:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleContactChange = (e) => {
    const { id, value } = e.target;
    setContactData((prev) => ({ ...prev, [id]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\n${JSON.stringify(contactData, null, 2)}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MediLite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#symptom-checker">Symptom Checker</a></li>
              <li className="nav-item"><a className="nav-link" href="#health-tips">Tips</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-white text-center d-flex align-items-center" style={{ backgroundImage: `url('/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh' }}>
        <div className="container bg-dark bg-opacity-75 p-4 rounded shadow-lg">
          <h1 className="display-4 fw-bold">Affordable Health Help for All</h1>
          <p className="lead">AI-powered insights and real-time support at your fingertips.</p>
          <a href="#symptom-checker" className="btn btn-light btn-lg mt-3 fw-semibold">Start Now</a>
        </div>
      </div>

      <div className="container my-5 text-center">
        <h1 className="text-dark fw-bold mb-4">Welcome to MediLite</h1>
        <p className="fs-5 text-muted">MediLite is a remote health companion that leverages AI and IoT to provide affordable, basic healthcare insights for underserved communities.</p>
      </div>

      <div id="symptom-checker" className="container my-5">
        <h2 className="text-center mb-4">🩺 AI Symptom Checker</h2>
        <form onSubmit={handleSubmit} className="mx-auto p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
            <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label fw-semibold">Your Age</label>
            <input type="number" className="form-control" id="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="symptoms" className="form-label fw-semibold">Describe your symptoms</label>
            <textarea className="form-control" id="symptoms" rows="4" value={formData.symptoms} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100 fw-bold" disabled={loading}>
            {loading ? 'Analyzing...' : 'Get AI Advice'}
          </button>
        </form>

        {aiResponse && (
          <div className="alert alert-success mt-4 text-center shadow" role="alert">
            <strong>AI Response:</strong> {aiResponse}
          </div>
        )}
      </div>

      <div id="health-tips" className="container my-5">
        <h2 className="text-center mb-4">💡 Health Tips</h2>
        <div className="row">
          {[
            { title: 'Stay Hydrated', text: 'Drink 8+ glasses of water a day to boost metabolism and support immunity.' },
            { title: 'Exercise Regularly', text: '30 minutes of daily activity helps with heart health and mental clarity.' },
            { title: 'Eat More Greens', text: 'Vegetables are rich in vitamins, minerals, and antioxidants.' },
          ].map((tip, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{tip.title}</h5>
                  <p className="card-text">{tip.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="container my-5">
        <h2 className="text-center mb-4">📬 Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="mx-auto p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="contactName" className="form-label fw-semibold">Name</label>
            <input type="text" className="form-control" id="contactName" value={contactData.contactName} onChange={handleContactChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="contactEmail" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" id="contactEmail" value={contactData.contactEmail} onChange={handleContactChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="contactMessage" className="form-label fw-semibold">Message</label>
            <textarea className="form-control" id="contactMessage" rows="4" value={contactData.contactMessage} onChange={handleContactChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-outline-success w-100 fw-bold">Send Message</button>
        </form>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 MediLite. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;