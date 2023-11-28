import React from "react"
import memesData from "../data/memesData.js"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    const [formData, setFormData] = React.useState(
        {
            topText: "",
            bottomText: ""
        });

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    React.useEffect(() => {

        getMemeImage()

    }, [])

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.topText}
                    name="topText"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.bottomText}
                    name="bottomText"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="wrapper">
                <img src={memeImage} className="meme--image" />
                <p className="top-text">{formData.topText}</p>
                <p className="bottom-text">{formData.bottomText}</p>
            </div>
        </main>
    )
}

export default Meme
