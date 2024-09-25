function TabButton({ children, onSelect, isSelcted }) {
  // function handleClick() {
  //   console.log("hello world");
  // }

  return (
    <li>
      <button onClick={onSelect} className={isSelcted ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
