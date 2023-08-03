import { useEffect, useState } from "react";
import "./App.css";//main css file 
import axios from "axios";//for api 
import img from "./components/images/logo.png";//logo image
import data from "./components/Data";//import data 
import Movie from "./components/Movie";//import movie func
import Slot from "./components/Slot";//import slot func 
import Seats from "./components/Seats";//import seats func
import LastBooking from "./components/LastBooking";//import lasbooking func
import Movie1 from "../src/components/images/Suraj.jpeg";//import the movie image
import Movie2 from "../src/components/images/tenet.jpeg";
import Movie3 from "../src/components/images/theGrandpa.jpeg";
import Movie4 from "../src/components/images/David.jpeg";
import Movie5 from "../src/components/images/comeplay.jpeg";
import { BASE_URL } from "../src/url";



function App() {
  let images = [//image array
    `${Movie1}`,
    `${Movie2} `,
    `${Movie3}`,
    `${Movie4}`,
    `${Movie5}`,
  ];
  //save movidata func
  const [movieData, setmovieData] = useState({
    movie: "",
    slot: "",
    seats: [],
  });
  const [fetched, setFetched] = useState();

  const movieHandler = (movie) => {
    setmovieData((prev) => {
      return {
        ...prev,
        movie,
      };
    });
  };

  const slotHandler = (slot) => {
    setmovieData((prev) => {
      return {
        ...prev,
        slot,
      };
    });
  };

  const seatHandler = (seat) => {
    const seatIndex = movieData.seats.findIndex(
      (el) => el.seatType === seat.seatType
    ); //storing the index of similar seatType in the array of seats inside movieData
    if (seatIndex !== -1) {
      const newSeatData = [...movieData.seats];
      newSeatData[seatIndex] = seat;

      setmovieData((prev) => {
        return {
          ...prev,
          seats: newSeatData,
        };
      });
    } else {
      setmovieData((prev) => {
        return {
          ...prev,
          seats: [...prev.seats, seat],
        };
      });
    }
  };
  movieData.seats = movieData.seats.filter(
    (item) => item.seatNo !== "" && item.seatNo !== 0
  );

  const postData = async () => {
    await axios
      .post(`${BASE_URL}/api/booking`, movieData)
      .then((res) => setFetched(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if (
      movieData.movie === "" ||
      movieData.slot === "" ||
      movieData.seats.length === 0
    ) {
      return alert("Select all details and then submit!");
    } else {
      postData();
      return alert("Booking Successful ☺");
    }
  };

  const fetchData = async () => {
    await axios
      .get(`${BASE_URL}/api/booking`)
      .then((res) => setFetched(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    await axios
      .delete(`${BASE_URL}/api/booking`)
      .then((res) => res.data)
      .then(setFetched("no previous booking found"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mainContainer">
      <div className="img-container">
        <img src={img} alt="logo" height={"50px"} width="150px" />
      </div>

      <div className="AppContainer">
        <div className="containerOuter">
          <Movie
            data={data.movies}
            movieSelector={movieHandler}
            movieData={movieData.movie}
            images={images}
          />
          <Slot
            data={data.slots}
            slotSelector={slotHandler}
            movieData={movieData.slot}
          />
          <Seats data={data.seats} seatSelector={seatHandler} />

          <div className="btn">
            <button onClick={handleSubmit} className="submit-btn">
              Submit
            </button>
          </div>
        </div>
        <div>
          <LastBooking data={fetched} />
          <div className="btn2">
            <button onClick={handleDelete} className="submit-btn">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
