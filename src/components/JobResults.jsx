import classes from "./JobResults.module.css";
import Job from "../components/Job";
import {JobsContext  } from '../store/JobsContext'
import { useContext } from "react";


export default function JobResults({filterData}) {


  const {data, searchData} = useContext(JobsContext);

  if (!data || data.length === 0) {
    return <div>Loading jobs...</div>; // Show a loading message or spinner
  }

  // Use a Set to avoid duplicates
  let filteredJobs = new Set();

  // Add jobs matching 'title' criteria to the set
  if (searchData.title) {
    data.filter(job => searchData.title.includes(job.title))
      .forEach(job => filteredJobs.add(job));
  }

    // Add jobs matching 'location' criteria to the set
    if (searchData.city) {
      data.filter(job => searchData.city.includes(job.location))
        .forEach(job => filteredJobs.add(job));
    }

  // Add jobs matching 'sitting' criteria to the set
  if (filterData.sitting && filterData.sitting.length > 0) {
    data.filter(job => filterData.sitting.includes(job.sitting))
           .forEach(job => filteredJobs.add(job));
  }

  // Add jobs matching 'employment' criteria to the set
  if (filterData.employement && filterData.employement.length > 0) {
    data.filter(job => filterData.employement.includes(job.type))
           .forEach(job => filteredJobs.add(job));
  }

  // Add jobs matching 'experience' criteria to the set
  if (filterData.experience && filterData.experience.length > 0) {
    data.filter(job => filterData.experience.includes(job.exp))
           .forEach(job => filteredJobs.add(job));
  }

  // Convert Set back to Array for rendering
  filteredJobs = Array.from(filteredJobs);

  let jobsData = filteredJobs;

  if(filteredJobs.length === 0){
    jobsData = data;
  }

  return (
    <>
      <div className={classes["title"]}>Results</div>
      <div className={classes["list-wrap"]}>
        <ul>
        {jobsData.length > 0 ? (
            jobsData.map((job) => (
              <Job job={job} key={job.id} />
            ))
          ) : (
            <div>No jobs match your criteria.</div>
          )}
        </ul>
      </div>
    </>
  );
}
