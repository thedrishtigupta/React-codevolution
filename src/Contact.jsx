import { ActionButton } from "./ActionButton";

export const Contact = () => {
    const handleSendMessage = () => {
        alert("Sending your message...");
    }
    return (
        <div>
        <h2>Contact Us</h2>
        <ActionButton text = "Send a message" onClick={handleSendMessage}/>
        </div>
    );
};