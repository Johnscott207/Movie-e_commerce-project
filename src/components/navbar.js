import '../style/navbar.css';

function Navbar() {
  return (
    <div className="nav_bar">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Category</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Upload</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">About Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
