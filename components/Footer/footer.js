
import styles from './page.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Bazaar Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className={styles.links}>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>Customer Care</h4>
            <ul>
              <li>Help Center</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>70 Washington Square South, NY</li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <p>Download our app</p>
          <div className={styles.stores}>
            <img src="/google-play.png" alt="Google Play" />
            <img src="/app-store.png" alt="App Store" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
