import { useEmojiContext } from "../context/EmojiContext";
import { useUserContext } from "../context/UserContext";

export const ContextStatus = () => {
    const { currentUser, mode } = useUserContext();
    const { emoji } = useEmojiContext();

    return (
        <div style={{ display: "flex", flexDirection: 'column', border: "1px purple, solid" }}>
            <p>Current User: {currentUser.name}</p>
            <p>Current Mode: {mode}</p>
            <p>Current Emoji: {emoji}</p>
        </div>
    )
}