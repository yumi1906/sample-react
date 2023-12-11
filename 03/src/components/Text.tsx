import React ,{useState} from "react";

type Props = {};

export const Text:React.FC<Props> = () => {
    const [text, setText] = useState("");
    const handleChangeText:React.ChangeEventHandler<HTMLInputElement> =
        (event) => setText(event.currentTarget.value);

    const onClick = () => {

    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChangeText} />
            <button onClick={onClick}>add</button>
        </div>
    );
};