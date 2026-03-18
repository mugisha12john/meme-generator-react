export default function Main() {
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
            />
          </label>

          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
            />
          </label>
          <button>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
          <img />
          <span className="top">welcome to this</span>
          <span className="bottom">tiger is waste</span>
        </div>
      </main>
    </>
  );
}
