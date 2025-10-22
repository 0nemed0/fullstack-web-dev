function Clicker() {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return <button onClick={handleClick}>Click Me</button>;
  //   return <button onClick={handleClick()}>Click Me</button>; handleClick() to call keep running
}

export default Clicker;
