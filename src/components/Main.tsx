import React,{ useEffect, useState } from "react";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simple",
    bottomText: "walk into sea",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  interface Meme {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
    captions: number;
  }
  interface MemeResponse {
    success: boolean;
    data: {
      memes: Meme[];
    };
  }

  const [allmeme, setAllmeme] = useState<Meme[]>([]);
  useEffect(() => {
    const fetchMeme = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data: MemeResponse = await res.json();
      setAllmeme(data.data.memes);
    };
    fetchMeme();
  }, []);

  function generateNewMeme() {
    const randomNumber: number = Math.floor(Math.random() * allmeme.length);
    const newImg = allmeme[randomNumber].url;
    setMeme((prev) => ({ ...prev, imageUrl: newImg }));
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
              placeholder={meme.topText}
              name="topText"
              onChange={handleChange}
            />
          </label>

          <label>
            Bottom Text
            <input
              type="text"
              placeholder={meme.bottomText}
              name="bottomText"
              onChange={handleChange}
            />
          </label>
          <button onClick={generateNewMeme}>Get a new meme image 🖼</button>
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
