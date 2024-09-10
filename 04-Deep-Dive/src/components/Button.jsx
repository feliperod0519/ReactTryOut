export default function Button({mode, children,Icon,...props}) {
    // Todo: Build this component!
    
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
       const IconContainer = Icon || 'span';
       return (<button className={!mode?'filled-button':((mode==='filled'|| mode==='')?'filled-button':(mode==='outline'?'outline-button':'text-button'))}><IconContainer/><span>{children}</span></button>)
   }