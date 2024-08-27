import { useState } from "react";
import classes from "./Filter.module.css";
import img from "../assets/down.svg";

export default function Filter({ onFilterChange }) {
  
  const [formData, setFormData] = useState({
    employement: [],
    experience: [],
    sitting:[]
});


  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prevState => {
        const updatedArray = checked
            ? [...prevState[name], value]
            : prevState[name].filter(item => item !== value);
        return {
            ...prevState,
            [name]: updatedArray
        };
    });

    if(e.target.checked){
      e.target.classList.add(classes.checkedBox);
    }else{
      e.target.classList.remove(classes.checkedBox);
    }
};


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFilter = formData; 
    onFilterChange(newFilter);
};


  const handleReset = function(){

    setFormData({
      employement: [],
      experience: [],
      sitting:[]
  })

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // Looping through each checkbox and removing the specified class
  checkboxes.forEach(checkbox => {
    checkbox.classList.remove(classes.checkedBox);
  });


  }

  return (
    <>
      <div className={classes["title"]}>Filter</div>
      <div className={classes["filter-wrap"]}>
        <form onSubmit={handleSubmit}>
          <div className={classes[("job-type", "sec")]}>
            <div className={classes["head"]}>
              <div className="txt">Job Type</div>
              <img src={img} alt="down-arrow" />
            </div>
            <label htmlFor="full-time" className={classes["types"]}>
              <input
                type="checkbox"
                name="employement"
                value="full-time"
                onChange={handleCheckboxChange}
              />
              <span>Full-time</span>
            </label>
            <label htmlFor="part-time" className={classes["types"]}>
              <input
                type="checkbox"
                name="employement"
                value="part-time"
                onChange={handleCheckboxChange}
              />
              <span>Part-time</span>
            </label>
            <label htmlFor="internship" className={classes["types"]}>
              <input
                type="checkbox"
                name="employement"
                value="internship"
                onChange={handleCheckboxChange}
              />
              <span>Internship</span>
            </label>
          </div>
          <div className={classes[("work-type", "sec")]}>
            <div className={classes["head"]}>
              <div className="txt">Work Type</div>
              <img src={img} alt="down-arrow" />
            </div>
            <label htmlFor="remote" className={classes["types"]}>
              <input
                type="checkbox"
                name="sitting"
                value="remote"
                onChange={handleCheckboxChange}
              />
              <span>Remote</span>
            </label>
            <label htmlFor="hybrid" className={classes["types"]}>
              <input
                type="checkbox"
                name="sitting"
                value="hybrid"
                onChange={handleCheckboxChange}
              />
              <span>Hybrid</span>
            </label>
            <label htmlFor="on-site" className={classes["types"]}>
              <input
                type="checkbox"
                name="sitting"
                value="on-site"
                onChange={handleCheckboxChange}
              />
              <span>On-site</span>
            </label>
          </div>
          <div className={classes[("exp-type", "sec")]}>
            <div className={classes["head"]}>
              <div className="txt">Experience</div>
              <img src={img} alt="down-arrow" />
            </div>
            <label htmlFor="fresher" className={classes["types"]}>
              <input
                type="checkbox"
                name="experience"
                value="fresher"
                onChange={handleCheckboxChange}
              />
              <span>Fresher</span>
            </label>
            <label htmlFor="mid-level" className={classes["types"]}>
              <input
                type="checkbox"
                name="experience"
                value="mid-level"
                onChange={handleCheckboxChange}
              />
              <span>Mid-level</span>
            </label>
            <label htmlFor="senior" className={classes["types"]}>
              <input
                type="checkbox"
                name="experience"
                value="senior"
                onChange={handleCheckboxChange}
              />
              <span>Senior</span>
            </label>
          </div>
          <div className={classes[("salary-range", "sec")]}>
            <div className={classes["head"]}>
              <div className="txt">Salary range</div>
              <img src={img} alt="down-arrow" />
            </div>
            <div className={classes["range-sec"]}>
              <span className={classes["slide-txt"]}>$50K</span>
              <input
                type="range"
                name="salary"
                min="50"
                max="250"
              />
              <span className={classes["slide-txt"]}>$250K</span>
            </div>
          </div>
          <button className={classes["button"]} type="submit">
            Apply Changes
          </button>
          <button className={`${classes.button} ${classes.resetButton}`} onClick={handleReset}>
            Reset Changes
          </button>
        </form>
      </div>
    </>
  );
}
