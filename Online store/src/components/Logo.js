import { Link } from "react-router-dom";

export default function Logo() {
  return (
      <Link to={"/"} className="logo">
        <div className="headerFL">ANIME</div>
        <div className="headerSL">Paradise</div>
      </Link>
  );
}
