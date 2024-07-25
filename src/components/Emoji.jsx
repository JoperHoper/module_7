import { useState } from "react"
import { useEmojiContext } from "../context/EmojiContext"

export const EmojiContainer = () => {
    const emojiContext = useEmojiContext()
    const [emoji, setEmoji] = useState("(✿◠‿◠)")
    const [currentIndex, setCurrentIndex] = useState(0)
    const emojiArray = ["¯\_( ͡° ͜ʖ ͡°)_/¯", "~\(≧▽≦)/~", "ʕっ•ᴥ•ʔっ", "⊙ω⊙", "(✿◠‿◠)"]

    const emojiHandler = () => {
        let index = Math.round(Math.random() * 3)
        if (index !== currentIndex) {
            setCurrentIndex(index)
            let selectedObj = emojiArray[index]
            setEmoji(selectedObj)
            emojiContext.handleUpdateEmoji(selectedObj)
        }
    }

    return (
        <div>
            <h2>Current Emoji: <p>{emoji}</p></h2>
            <button style={{ border: "1px black solid" }} onClick={emojiHandler}>Change Mood</button>
        </div>
    )
}