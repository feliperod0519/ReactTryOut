import LoginButton from "./LoginButton"
import Panel from "./Panel";

export default function Form({children}){

    return (
            <Panel title="Welcome">
                <LoginButton />
            </Panel>
    );
}