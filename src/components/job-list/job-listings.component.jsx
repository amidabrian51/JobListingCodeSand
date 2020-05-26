import React from "react";

import JobCard from "../job-card/job-card.component";

const JobListing = props => (
  <div>
    {props.jobs.map(({ id, ...otherJobProps }) => (
      <JobCard onClick={console.log('you have clicked the button')} key={id} {...otherJobProps} />
    ))}
  </div>
);

export default JobListing;
