import { useState } from "react";
import img from "../assets/hero.png";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One time i will eat earth",
    bottomText: "one day i will carry earth",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <main>
        <div className="form">
          <label>
            Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
            />
          </label>

          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
            />
          </label>
          <button>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
          <img src={meme.imageUrl} />
          <span className="top">{meme.topText}</span>
          <span className="bottom">{meme.bottomText}</span>
        </div>
      </main>
    </>
  );
}
