import { Link } from "react-router-dom";

export default function Navbar({logout}) {
  return (
    <div className="w-25 sticky-left mx-5 fs-5">
      <nav className="navbar navbar-light bg-light">
        <ul className="list-unstyled p-2 d-flex flex-column">
          <Link className="navbar-brand" to="/">
            <i className="fab fa-earlybirds fa-2x text-primary" />
          </Link>
          <li className="nav-item active">
            <Link to="/home" className="nav-link">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="fas fa-search" /> Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="fas fa-bell" /> Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="fas fa-comment-alt" /> Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="fas fa-bookmark" /> Bookmarks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="fas fa-list" /> Lists
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <i className="fas fa-user" /> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="fas fa-angle-double-right" /> More
            </Link>
          </li>
          <button onClick={logout} type="button" className="btn btn-info self-align-center" >
            <i className="fas fa-feather" />
            <span >Log Out</span>
          </button>
        </ul>
      </nav>
    </div>
  );
}
