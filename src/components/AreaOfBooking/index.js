import { useState } from "react";
import { Link } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';
import { v4 } from "uuid";
//import Ticket from "../Ticket"

import "./index.css";

const AreaOfBooking = () => {
  
  const [ticktsno, setTicketsno] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [passengerList, setPassengerList] = useState([]);
  const [windowSeats, setWindowSeats] = useState([
    "W1",
    "W2",
    "W3",
    "W4",
    "W5",
  ]);
  const [middleSeats, setMiddleSeats] = useState([
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
  ]);
  const [aisleSeats,setAisleSeats] = useState([
    "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18","A19","A20",
  ])

  const [booking, setBooking] = useState(false);
 
  const ShowBookings = () => {
    setBooking(true);
  };
  const handleClose=()=>{
   
    setBooking(false);
  }
  const passangerHandler = (e) => {
    e.preventDefault();
    let availableSeats;
    if (age > 60) {
      if (gender === "Female") {
        availableSeats = windowSeats.filter(
          (seat) => !passengerList.some((p) => p.seat === seat)
        );
      }
      if (availableSeats.length === 0) {
        availableSeats = middleSeats.filter(
          (seat) => !passengerList.some((p) => p.seat === seat)
        );
      } else if(availableSeats.length === 10)  {
        availableSeats = aisleSeats.filter(
          (seat) => !passengerList.some((p) => p.seat === seat)
        );
      } else {
        availableSeats = [...windowSeats, ...middleSeats,...aisleSeats].filter(
         (seat) => !passengerList.some((p) => p.seat === seat)
        );
     }
    
    }   else {
       availableSeats = [...windowSeats, ...middleSeats,...aisleSeats].filter(
        (seat) => !passengerList.some((p) => p.seat === seat)
       );
    }

    let allocatedseat;

    if (passengerList.length > 0) {
      allocatedseat = availableSeats.find(
        (seat) =>
          !passengerList.some((p) => p.gender === gender && p.seat === seat)
      );
    } else {
      allocatedseat = availableSeats[0];
    }

    setPassengerList([ ...passengerList,
      {
        id: v4(),
        name: name,
        age: age,
        gender: gender,
        seat: allocatedseat,
      },
    ]);
    setAge("");
    setName("");
  };

  return (
    <>
      {/* <Header /> */}
      <div className="header-container">
      <div className="home-login-container">
      <Link className="link" to="#">
          <p className="sprits"> 
          <img className="logos" src='https://media.licdn.com/dms/image/C510BAQFEpFHWZMVDRA/company-logo_200_200/0/1519893946434?e=2147483647&v=beta&t=nlkQL8i_V1Ke4BdGUjDndBsRSmzTmPCZ0-N7VKfH6lE' alt='logo'/>
          Ticket Booking
           </p>
          
        </Link>
       
        
        <Link className="link" to="/">
          <p className="text">Log Out <LogoutIcon/></p>
        </Link>
      </div>
    </div>
      <div className="bookin-container">
        <div className="head-form-container">
          <h1 style={{marginLeft:'50px'}}>Passenger Form</h1>
          <form onSubmit={passangerHandler} className="passanger-form">
            <div>
              <label className="label">NumberOfTickets  </label>
              <input
                value={ticktsno}
                onChange={(e) => setTicketsno(e.target.value)}
                placeholder="enter tickets"
                className="passanger-form-inputs"
                type="text"
              />
            </div>
            <div>
              <label className="label">Passenger Name </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter passenger name"
                className="passanger-form-inputs"
                type="text"
              />
            </div>
            <div>
              <label className="label">Passenger Age  </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="enter passenger age"
                className="passanger-form-inputs"
                type="text"
              />
            </div>
            <div>
              <label className="label">Passenger Gender </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="passanger-form-inputs"
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>

              </select>
            </div>
            <button className="log-out-button-t" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Book Tickets
            </button>
          </form>
        </div>
        <hr />
        <div className="bottom-container">
          <ul className="ul-con">
            {passengerList.map((passanger) => (
              <li className="li-container" key={passanger.id}>
                <div className="ticket-counter">
                  <div>
                    <div className="div-con">
                      <h4>Name: <span>{" "}{passanger.name}</span></h4>
                  
                    </div>
                    <div className="div-con">
                      <h4>Age: <span>{passanger.age}</span> </h4>
                    </div>
                  </div>
                  <div>
                    <div className="div-con">
                      <h4>Gender: <span>{passanger.gender}</span></h4>
                    
                    </div>
                    <div className="div-con">
                      <h4>Seats:<span>{passanger.seat}</span> 
                      </h4>
                    </div>
                  </div>
                </div>
                <hr />
                <p > Show Your Booking Id at counter to Collect Ticket</p>
                <button className="log-out-button-t" onClick={ShowBookings}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Bookin ID</button>

                {booking 
                 ? (
                  <p className="msg" >{passanger.id}  <button className="close" onClick={(id)=>handleClose(id)}>Close</button>  </p>
                ) : null}

              </li>
            ))}
          </ul> 
        </div>
      </div>
    </>
  );
};
export default AreaOfBooking;
