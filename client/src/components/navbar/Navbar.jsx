import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar({logout}) {
  return (
    <div className="w-25  fixed-top fs-5  vh-100 " style={{borderRight: '1px solid #202327'}}>
      <nav className="navbar mx-2 navbar-light  shadow-none bg-transparent justify-content-end">
        <ul className="list-unstyled p-2 d-flex flex-column align-self-baseline">
          <Link className="navbar-brand" to="/">
            <i className="fab fa-earlybirds fa-2x" />
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
          <button onClick={logout} type="button" className="btn btn-info text-ceneter" >
          <i className=" fas fa-flip-horizontal fa-sign-out-alt fs-5 " style={{ verticalAlign: 'inherit', float: 'left'  }}></i>
            <span style={{ verticalAlign: 'middle', fontWeight: 'bolder', fontSize: '1.2em' }} >Log Out</span>
          </button>
        </ul>
      </nav>
    </div>
  );
}
