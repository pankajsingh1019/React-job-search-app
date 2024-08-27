import classes from "./Hero.module.css";
import { useState, useRef, useContext } from "react";
import {JobsContext  } from '../store/JobsContext'

export default function Hero() {
  
  const [data, setData] = useState({});

  const {handleSearchData} = useContext(JobsContext);

  const titleRef = useRef(null);
  const cityRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      title: titleRef.current.value,
      city: cityRef.current.value,
    };

    setData(newData);
    handleSearchData(newData);
  };

  return (
    <div className={classes["hero-main"]}>
      <div className={classes["container"]}>
        <div className={classes["main-wrap"]}>
          <div className={classes["form-wrap"]}>
            <div className={classes["heading-wrap"]}>
              <div className={classes["main-head"]}>
                Job Search Made Easy with <span>Jobify</span>
              </div>
              <div className={classes["sub-head"]}>Start Exploring...</div>
            </div>
            <form className={classes["form"]} onSubmit={handleSubmit}>
              <div className={classes["input-wrap"]}>
                <input
                  type="text"
                  placeholder="Enter Job Title.."
                  className={classes["title"]}
                  name="title"
                  ref={titleRef}
                />
                <input
                  type="text"
                  placeholder="Enter City.."
                  className={classes["location"]}
                  name="city"
                  ref={cityRef}
                />
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
