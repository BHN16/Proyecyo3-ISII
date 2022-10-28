import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css"

function CustomLink({ to, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} />
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Votos validos</CustomLink>
        <CustomLink to="/region">Votos region</CustomLink>
        <CustomLink to="/departamento">Votos departamento</CustomLink>
        <CustomLink to="/distrito">Votos distrito</CustomLink>
      </ul>
    </nav>
  )
}
