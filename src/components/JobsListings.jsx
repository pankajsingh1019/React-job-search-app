import Filter from './Filter'
import classes from './JobListings.module.css';
import JobResults from './JobResults';
import { useState } from 'react';

export default function JobsListings() {

  const [filterData, setFilterData] = useState({});

  const handleFilterChange = (newFilter) => {
    setFilterData(newFilter);
  };


  return (
    <div className={classes['job-listings']}>
      <div className="container">
        <div className={classes["main-wrap"]}>
          <div className={classes["left-wrap"]}>
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className={classes["right-wrap"]}>
            <JobResults filterData={filterData}/>
          </div>
        </div>
      </div>
    </div>
  )
}
