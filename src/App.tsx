import React from 'react';
import './App.css';
import Routes from './pages/Routes';
import Header from './components/header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-[70vh] font-poppins'>
        <Routes />
      </main>
      <Footer />
    </>

  );
}

export default App;
