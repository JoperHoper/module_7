import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const EmojiContext = createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>

export const EmojiProvider = (props) => {
    // store the current user in state at the top level
    const [emoji, setEmoji] = useState("(✿◠‿◠)")
    const [currentIndex, setCurrentIndex] = useState(0)
    const emojiArray = ["¯\_( ͡° ͜ʖ ͡°)_/¯", "~\(≧▽≦)/~", "ʕっ•ᴥ•ʔっ", "⊙ω⊙", "(✿◠‿◠)"]

    const changeMood = () => {
        let index = Math.round(Math.random() * 3)
        if (index !== currentIndex) {
            setCurrentIndex(index)
            let selectedObj = emojiArray[index]
            setEmoji(selectedObj)
        }
    }

    // sets user object in state, shared via context
    const handleUpdateEmoji = (emoji) => {
        setEmoji(emoji);
    }
    // 2. Provide the context.
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current user and an update function
    return (
        <EmojiContext.Provider value={{ emoji, handleUpdateEmoji, changeMood }}>
            {props.children}
        </EmojiContext.Provider>
    );
}
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useEmojiContext = () => {
    return useContext(EmojiContext);
}
// Save as UserContext.jsx in a separate 'context' folder