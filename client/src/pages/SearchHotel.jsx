import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsCalendar2DayFill, BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "../components/List/SearchBar/SearchBar.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchBar from "../components/List/SearchBar/SearchBar";
import Hotels from "../components/List/Hotels/Hotels";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

const SearchHotel = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [newDestination, setNewDestination] = useState("");
  const [state, setState] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openOptions, setOpenOptions] = useState(false);
  const [openDate, setOpenDate] = React.useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, isLoading, error, reFetch } = useFetch(
    `/hotels?city=${newDestination ? newDestination : destination}&min=${
      min || 0
    }&max=${max || 999}`
  );

  console.log(location);

  console.log(data);

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
    reFetch();
    console.log("Fetched");
  };
  return (
    <>
      <section className="padding-block-900">
        <div className="container">
          <div className="search-form">
            <h2 className="search-title">Your Location</h2>
            <p className="search-location">Califoccrn, USA</p>
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
                    placeholder={destination}
                    onChange={(e) => setNewDestination(e.target.value)}
                  />
                </div>
              </div>

              <div className="booking-detail">
                <label htmlFor="">Min - Max</label>
                <div className="min-max">
                  <div className="min-box">
                    <p>Min</p>
                    <input
                      type="number"
                      placeholder="0"
                      className="min-form"
                      onChange={(e) => setMin(e.target.value)}
                    />
                  </div>

                  <div className="max-box">
                    <p>Max</p>
                    <input
                      type="number"
                      placeholder="999"
                      className="max-form"
                      onChange={(e) => setMax(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="booking-detail">
                <label>Check-in - Check-out</label>
                <div className="detail">
                  <p onClick={openDates} style={{ cursor: "pointer" }}>
                    <BsCalendar2DayFill />
                    {`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(
                      state[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </p>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
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
                  <BsFillPersonFill />
                  <span
                    style={{ cursor: "pointer" }}
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

              <button onClick={handleSearch} className="btn search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {data.length > 1 && (
        <p className="search-info">
          <span className="destination">{newDestination || destination}</span>: {data.length}{" "}
          properties found.
        </p>
      )}
      {isLoading ? (
        <p>Loading.......</p>
      ) : (
        <>
          {data.map((item) => {
            return <Hotels key={item._id} item={item} />;
          })}
        </>
      )}

      
      {data.length == 0 && (
        <p className="search-info">
          {" "}
          <span className="destination">{newDestination || destination}</span>: No Properties
          Available
        </p>
      )}
      <Hotels />
    </>
  );
};

export default SearchHotel;
