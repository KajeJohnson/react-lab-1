import "./Header.css";

interface UserProps {
  user?: string;
}

function Header({ user = `Welcome KJ` }: UserProps) {
  return (
    <div className="header">
      <header style={{ color: "#0e3c7e", fontSize: "30px" }}>
        <h1>Ice Cream Wars </h1>
        {user}
      </header>
    </div>
  );
}

export default Header;
