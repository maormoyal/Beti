import React from 'react';
import { useAppContext } from '../App/App.context';
import betiLogo from '../../assets/beti-logo.png';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { toggleBooks, privateBookCount } = useAppContext();
  return (
    <header className={styles.stickyHeader}>
      <h1>
        <img src={betiLogo} width='30px' alt='Beti Logo'></img> Books Fast-Test
        Homework
      </h1>
      {toggleBooks && <p>Your books: {privateBookCount}</p>}
    </header>
  );
};

export default Header;
