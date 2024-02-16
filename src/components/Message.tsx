import { MouseEvent } from "react";

function Message(props: { name: string}){

    const handleClick = (event:MouseEvent) => console.log(event.altKey);

    return <h1 className="text" onClick={ handleClick }>Hello {props.name}!</h1>;
}

export default Message;