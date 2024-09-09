export default function TabButton({children, onSelected}){

    // function handleTabClick(){
    //     console.log('Tab clicked');
    // }

    return (
            <li>
                <button onClick={onSelected}>{children}</button>
            </li>
            )
}