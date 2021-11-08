const Header = ({ name, description, picture }) => {
  return (
    <header>
      <div className="deliveroo-icon">placeholder</div>
      <div className="headline">
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={picture} alt="healthy breakfast" />
      </div>
    </header>
  );
};

export default Header;
