import { useState } from "react";
import type { Job } from "../data/jobs";
import "../styles/JobCard.css";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h2>{job.title}</h2>

      <p>
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Salary:</strong> {job.salary}
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="details-btn"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="job-details">
          <p>{job.description}</p>
        </div>
      )}
    </div>
  );
};

export default JobCard;
