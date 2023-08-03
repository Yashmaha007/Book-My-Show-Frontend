import React from "react";
import loader from "../components/images/loader.gif"; //loader made by gif
import NoBokking from "../components/images/No-booking.png"; //no booking png

//lastbooking func


const LastBooking = (props) => {
  return (
    <div className="BookingContainer">
      {!props.data ? (
        <img
          className="LoaderImg"
          src={loader}
          alt={"No Booking Found"}
          style={{}}
        />
      ) : props.data === "no previous booking found" ? (
        <div className="NoBooking">
          <h2>No Booking found</h2>
          <img
            src={NoBokking}
            alt={"No-Booking"}
            style={{ height: "200px", width: "200px", marginTop: "20px" }}
          />
        </div>
      ) : (
        <>
          <h2 style={{ marginBottom: "10px" }}>Last Booking Details:</h2>
          <h3>Seats:</h3>
          {props.data.seats && props.data.seats.map((el, i) => (
            <div key={i}>
              <span style={{ fontWeight: "bold" }}>{el.seatType}</span>:
              <span
                style={{
                  fontStyle: "italic",
                  color: "#333545",
                  fontWeight: "bold",
                }}
              >
                {el.seatNo}
              </span>
            </div>
          ))}
          <div>
            <h3 style={{ display: "inline" }}>Slot:</h3>
            <p
              style={{
                display: "inline",
                fontStyle: "italic",
                color: "#333545",
                fontWeight: "bold",
              }}
            >
              {props.data.slot}
            </p>
          </div>
          <h3 style={{ display: "inline" }}>Movie:</h3>
          <p
            style={{
              display: "inline",
              fontStyle: "italic",
              color: "#333545",
              fontWeight: "bold",
            }}
          >
            {props.data.movie}
          </p>
        </>
      )}
    </div>
  );
};

export default LastBooking;
