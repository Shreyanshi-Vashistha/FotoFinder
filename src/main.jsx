// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import App from './App.jsx';
import { Container } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
   
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container className="flex-grow-1">
          <App />
        </Container>
        {/* <Footer /> */}
      </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
