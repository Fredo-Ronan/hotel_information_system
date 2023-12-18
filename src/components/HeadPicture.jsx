import "./style/HeadPicture.css";

export const HeadPicture = ({ gambar, headlinePage, description }) => {
  return (
    <div className="head">
      <img src={gambar} alt="" className="full" />
      <div className="overlay-text">
        <h1>{headlinePage}</h1>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
};
