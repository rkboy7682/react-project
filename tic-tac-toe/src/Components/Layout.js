import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    
    <div className="layoutstyle">
      
      <nav>
        <ul className="linkstyle1">
          <div className="div1">
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </div>
          <div className="div1">
            <li>
              <Link to="/Page">Page</Link>
            </li>
            </div>
          <div className="div1">
            <li>
              <Link to="/Documentation">Documentation</Link>
            </li>
          </div>
          <div className="div1">
            <li>
              <Link to="/Purches">Purches</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
export default Layout;