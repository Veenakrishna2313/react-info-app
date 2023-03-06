
import Body from './Body';
import Header from './Header';
import Footer from './Footer'
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={handleToggle} />
      <Body darkMode={darkMode} />
      <Footer/>
    </div>
  );
}

export default App;
