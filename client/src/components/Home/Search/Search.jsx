import React, { useContext, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsCalendar2DayFill, BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [openDate, setOpenDate] = React.useState(false);
  const [destination, setDestination] = React.useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  //searchContext
  const { dispatchSearch } = useContext(SearchContext)

  const openDates = () => {
    setOpenDate((prevDate) => !prevDate);
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatchSearch({ type: "NEW_SEARCH", payload: { destination, date, options }});
    navigate("/hotels", { state: { destination, date, options }})
  }

  return (
    <section className="padding-block-900">
      <div className="container">
        <div className="search-form">
          <h2 className="search-title">Your Location</h2>
          <p className="search-location">California, USA</p>
          <hr />

          <div className="booking-group">
            <div className="booking-detail">
              <label>Location</label>
              <div className="detail">
                <FaLocationArrow />

                <input
                  type="text"
                  className="input"
                  name=""
                  id=""
                  placeholder="California"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            <div className="booking-detail">
              <label>Check-in - Check-out</label>
              <div className="detail">
                <p onClick={openDates} style={{ cursor: "pointer" }}>
                  <BsCalendar2DayFill />
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </p>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            </div>
            {}

            <div className="booking-detail">
              <label>People</label>
              <div className="detail">
                <BsFillPersonFill  />

                <span style={{ cursor: "pointer"}}
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="guest">
                    <div className="option">
                      <span className="option-text">Adult</span>
                      <div className="option-counter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option">
                      <span className="option-text">Children</span>
                      <div className="option-counter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option">
                      <span className="option-text">Room</span>
                      <div className="option-counter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button className="btn search-btn" onClick={handleSearch}>Search</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
