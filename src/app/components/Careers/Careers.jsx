import React, { useEffect, useState } from "react";
import "./Careers.css";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaMoneyBillWave,
  FaBuilding,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import ApplyJobForm from "./ApplyJobForm";
import axios from "axios"; // ✅ axios import

const API = process.env.REACT_APP_API_BASE_URL;
const DOMAIN = process.env.REACT_APP_DOMAIN;

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API}/api/careers/public`, {
          headers: { domain: DOMAIN },
        });

        const data = res.data;

        if (data.success) {
          setJobs(data.data || []);
        } else {
          setError("Careers not available");
        }
      } catch (err) {
        console.error("Error fetching careers:", err);
        setError("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading careers...</p>;
  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div className="Ncareer-page-container">
      <div className="Ncontainer">
        <h1 className="Ntitle">Current Openings</h1>

        <div className="Njob-grid">
          {jobs.map((job) => (
            <div key={job._id} className="Njob-card">
              {job.isHiring && <div className="Nribbon">HIRING</div>}

              <div className="Ncard-header">
                <FaBolt />
                <h2>{job.title}</h2>
              </div>

              <p className="Neligibility">{job.eligibility}</p>

              {job.requirements?.map((r, i) => (
                <div key={i} className="Nreq">
                  <FiCheck /> {r}
                </div>
              ))}

              {job.company && (
                <div className="Nreq">
                  <FaBuilding /> {job.company}
                </div>
              )}

              {(job.salary || job.stipend) && (
                <div className="Nreq">
                  <FaMoneyBillWave /> {job.salary || job.stipend}
                </div>
              )}

              {job.isHiring && (
                <div className="Napply-btn-container mt-4 mb-3">
                  <button
                    className="Napply-btn"
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now
                  </button>
                </div>
              )}

              <div className="Nfooter">
                <span>
                  <FaMapMarkerAlt /> {job.location}
                </span>
                <span>
                  <FaBriefcase /> {job.type}
                </span>
                <span>
                  <FaCheckCircle /> {job.experience}
                </span>
              </div>
            </div>
          ))}
        </div>

        <ApplyJobForm
          isOpen={!!selectedJob}
          jobTitle={selectedJob?.title}
          onClose={() => setSelectedJob(null)}
        />
      </div>
    </div>
  );
};

export default Careers;
