
import heart from "../assets/heart.svg";
import location from "../assets/location.svg";
import money from "../assets/money.svg";
import clock from "../assets/clock.svg";
import experience from "../assets/experience.svg"
import remote from "../assets/remote.svg";
import classes from "./JobResults.module.css";


export default function Job({job}) {
  return (
    <li className={classes["job-list"]}>
    <div className={classes["main-head"]}>
      <div className={classes["date"]}>{job.days} days ago</div>
      <div className={classes["job-title"]}>{job.title}</div>
      <div className={classes["company"]}>{job.company}</div>
    </div>
    <div className={classes["sub-head"]}>
      <div className={classes["img-txt"]}>
        <img src={location} alt="location" />
        <div className={classes["txt"]}>{job.location}</div>
      </div>
      <div className={classes["img-txt"]}>
        <img src={experience} alt="experience" />
        <div className={classes["txt"]}>{job.exp}</div>
      </div>
      <div className={classes["img-txt"]}>
        <img src={money} alt="money" />
        <div className={classes["txt"]}>${job.salaryMin}k - ${job.salaryMax}k</div>
      </div>
      <div className={classes["img-txt"]}>
        <img src={clock} alt="clock" />
        <div className={classes["txt"]}>{job.type}</div>
      </div>
      <div className={classes["img-txt"]}>
        <img src={remote} alt="remote" />
        <div className={classes["txt"]}>{job.sitting}</div>
      </div>
    </div>
    <div className={classes["apply-sec"]}>
        <div className={classes["apply-btn"]}>Apply</div>
        <div className={classes["bookmark"]}><img src={heart} alt="heart" /></div>
    </div>
  </li>
  )
}
