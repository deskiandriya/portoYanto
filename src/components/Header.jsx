import './Header.css';
import profileImage from '../assets/images/profile.jpg'; // Ganti sesuai gambar kamu

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1 className="name">Deski Andriyanto</h1>
        <p className="title">Web Developer</p>
        <div className="social-links">
          <a href="https://github.com/deskiandriya" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://https://www.linkedin.com/in/deski-andriyanto-b07996241/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:deskiandriyanto123@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
