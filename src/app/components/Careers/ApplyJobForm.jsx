import React, { useState } from "react";
import "./ApplyJobForm.css";

// ✅ DIRECT BACKEND API
const API = "http://localhost:5000/api/applied";

// ✅ DIRECT DOMAIN (no .env)
const DOMAIN = "orangeitech.in";

const ApplyJobForm = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    coverLetter: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);

  // 🔄 Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // 📤 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      // 🔴 REQUIRED BY SCHEMA
      data.append("domain", DOMAIN);
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);

      // OPTIONAL
      data.append("country", formData.country);
      data.append("coverLetter", formData.coverLetter);
      data.append("jobTitle", jobTitle);

      if (formData.file) {
        data.append("resume", formData.file);
      }

      const res = await fetch(API, {
        method: "POST",
        headers: {
          "x-domain": DOMAIN, // ✅ middleware support
        },
        body: data,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Apply failed");

      alert("✅ Application submitted successfully!");
      onClose();
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="apply-job-overlay">
      <div className="apply-job-popup">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>Apply for {jobTitle}</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <textarea
              name="coverLetter"
              placeholder="Cover Letter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>

          <div className="file-input-group">
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobForm;