import Hoot from "../hoot/Hoot";

export default function Navbar() {
  return (
    <div className="w-25 sticky-left mx-5 fs-5">
      <nav className="navbar navbar-light bg-light">
        <ul className="list-unstyled p-2 d-flex flex-column">
          <a className="navbar-brand" href="/">
            <i class="fab fa-earlybirds fa-2x text-primary" />
          </a>
          <li className="nav-item active">
            <a href="/" className="nav-link">
              <i class="fas fa-home" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-search" /> Explore
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-bell" /> Notifications
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-comment-alt" /> Messages
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-bookmark" /> Bookmarks
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-list" /> Lists
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-user" /> Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="fas fa-angle-double-right" /> More
            </a>
          </li>
          <button type="button" class="btn btn-info self-align-center" onClick={Hoot}>
            <i class="fas fa-feather" />
            <span> Hoot</span>
          </button>
        </ul>
      </nav>
    </div>
  );
}
