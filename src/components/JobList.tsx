import JobCard from "./JobCard";
import { jobs } from "../data/jobs";
import "../styles/JobList.css";

const JobList = () => {
  return (
    <div className="job-list-container">
      <h1 className="page-title">Available Job Listings</h1>

      {jobs.length > 0 ? (
        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="no-jobs">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
