export default function Tabs({buttons,children, buttonsContainer = 'menu' }) {
    const ButtonsContainer = buttonsContainer || 'menu';
    return (<>
                <ButtonsContainer>
                  {buttons}  
                </ButtonsContainer>
                {children}
            </>);
}