const LogoComponent = () => {
  return (
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2UpTMYL-AlhkSDiGCILwei8gLrqO2fphdw&usqp=CAU"
      alt="Logo"
    />
  );
};

// const SearchComponent = () => {
//   return (
//     <div className="search-bar">
//       <input placeholder="Search"></input>
//       <button>Search</button>
//     </div>
//   );
// };

const OptionComponent = () => {
  return (
    <div className="option">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Cart</h3>
      <h3>ContactUs</h3>
      <h3>Help</h3>
    </div>
  );
};

const Title = () => {
  return <h1 className="title">FoodApp</h1>;
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <LogoComponent />
      <Title />
      <OptionComponent />
    </div>
  );
};

export default HeaderComponent;
