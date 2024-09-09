export default function TabButton({children, onSelected, isSelected}){

    // function handleTabClick(){
    //     console.log('Tab clicked');
    // }

    return (
            <li>
                <button className={isSelected?'active':undefined} onClick={onSelected}>{children}</button>
            </li>
            )
}