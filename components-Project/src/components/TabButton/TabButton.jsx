function TabButton({ click, children, isSelected }) {
   return (
      <li>
         <button className={isSelected ? "active" : ""} onClick={click}>
            {children}
         </button>
      </li>
   );
}

export default TabButton;
