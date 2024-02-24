import { NavLink } from "react-router-dom";
import "./error.css";
const Error = () => {
  return (
    <div>
      <header>
        <h1>
         404 - We couldn't find the page you were looking for. But fear
          not, there are other paths to explore!
        </h1>
      </header>
      <main>
        <p>Oops! The page you're looking for doesn't seem to exist.</p>
        <p>Here are some options to get back on track:</p>
        <ul>
          <NavLink to="/">Home</NavLink>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/service">Srvice</NavLink>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Error;
