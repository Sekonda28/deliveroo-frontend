const Header = ({ name, description, picture }) => {
  return (
    <header>
      <div className="header-bar">
        <div className="deliveroo-icon container">
          <img
            src="https://braze.imgix.net/production/logos/Deliveroo_Logo_1600x400.png?auto=compress%2Cformat&fit=clip&q=90&w=1000&s=3d2acb6bc68c2a73ec74a836077f397d"
            alt="Deliveroo logo"
          />
        </div>
      </div>
      <div className="headline container">
        <div className="headline-description">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="headline-image">
          <img src={picture} alt="healthy breakfast" />
        </div>
      </div>
    </header>
  );
};

export default Header;
