import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoSection}>
          <img src="https://via.placeholder.com/50" alt="Logo" className={styles.logoImage} />
          <span className={styles.logoText}>LOGO</span>
        </div>

        <div className={styles.rightSection}>
          <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="Search" className={styles.icon} />
          <img src="https://img.icons8.com/ios/50/000000/like.png" alt="Favorites" className={styles.icon} />
          <img src="https://img.icons8.com/ios/50/000000/shopping-bag--v1.png" alt="Cart" className={styles.icon} />
          <img src="https://img.icons8.com/ios/50/000000/user.png" alt="User" className={styles.icon} />
          <div className={styles.language}>ENG ▼</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
