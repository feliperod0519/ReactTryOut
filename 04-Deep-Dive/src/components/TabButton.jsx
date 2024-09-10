export default function TabButton({ children, isSelected, ...myprops }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...myprops}>
        {children}
      </button>
    </li>
  );
}
