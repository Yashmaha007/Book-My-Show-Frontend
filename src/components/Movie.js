import React from "react";
//movie func
const Movie = (props) => {
  const { images } = props;
  return (
    <>
      <div className="container-movie">
        <h2 style={{ marginBottom: "5px" }}>Select a Movie</h2>
        <hr style={{ marginBottom: "10px" }} />
        <div style={{ display: "inline-block" }}>
          <div className="movie-div">
            {/* map the image func */}
            {images.map((imageUrl, index) => (
              <img
                className="Movie-img"
                key={index}
                src={imageUrl}
                alt={`Movie ${index + 1}`}
              />
            ))}
          </div>
          {/* map the movie name */}
          {props.data.map((el, i) => (
            <div className="Movie-name" style={{ display: "inline-block" }}>
              <div
                style={{
                  backgroundColor: `${
                    props.movieData === el ? "#f08e33" : "white"
                  }`,
                  border: "1px solid black",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  cursor: "pointer",
                }}
                onClick={() => props.movieSelector(el)}
                className="element1"
                key={i}
              >
                <h3>{el}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
