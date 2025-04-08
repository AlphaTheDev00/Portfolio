import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Yassine Chikar. All rights reserved.</p>
      </div>
    </footer>
  );
}
