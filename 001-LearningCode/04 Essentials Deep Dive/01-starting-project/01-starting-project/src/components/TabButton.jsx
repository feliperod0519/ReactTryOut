export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
      {/* <button className={isSelected ? 'active' : undefined} onClick={onSelect}></button> */}
        {children}
      </button>
    </li>
  );
}
