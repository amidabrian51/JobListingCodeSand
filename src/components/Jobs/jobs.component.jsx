import React, { Component } from "react";
import JobList from "../job-list/job-listings.component";

import "./jobs.styles.css";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      filterItems:[]
  }

}

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => this.setState({ jobs: data }));
  }

  render() {
    // const { jobs, searchJobs } = this.state;
    // const filterJobs = jobs.filter(job =>
    //   job.company.toLowerCase().includes(searchJobs.toLowerCase())
    // );
    return (
      <div>
        <h1>Here is my Job Listings Page</h1>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default Jobs;
