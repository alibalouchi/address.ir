import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import CardsList from './components/CardsList';
import Footer from './components/Footer'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@font-face': {
    fontFamily: 'Shabnam',
    src: 'url(./fonts/Shabnam.57960934.woff2)'
  },
  container: {
    fontFamily: 'Shabnam'
  }
})

const App = () => {

  const [hasPicture, setHasPicture] = useState(false)

    return (
      <div>
        <Header hasPicture={hasPicture} setHasPicture={setHasPicture} />
        <CardsList hasPicture={hasPicture} setHasPicture={setHasPicture} />
        <Footer />
      </div>
  );
    }

export default App;
