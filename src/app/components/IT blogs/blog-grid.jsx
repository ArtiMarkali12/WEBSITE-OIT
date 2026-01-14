import { useEffect, useState } from "react";
import axios from "axios";
import "./BlogGridPage.css";

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const DOMAIN = process.env.REACT_APP_DOMAIN;
export default function BlogGridPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // ================= FETCH BLOGS =================
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/blogs`, {
        headers: {
          "x-domain": DOMAIN,
        },
      });
      setBlogs(res.data || []);
    } catch (err) {
      console.error("Failed to load blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h2 className="page-title">Our Blogs</h2>

      {/* ================= GRID ================= */}
      <div className="blog-grid">
        {blogs.map((b) => (
          <div key={b._id} className="blog-card">
            {b.image && <img src={b.image} alt="blog" />}
            <div className="blog-content">
              <h4>{b.title}</h4>
              <small>By {b.author}</small>
              <p>{b.paragraphs?.slice(0, 2).join(" ")}</p>
              <button onClick={() => setSelectedBlog(b)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBlog.title}</h2>
            <p>
              <b>{selectedBlog.author}</b>
            </p>
            <small>
              {new Date(selectedBlog.publishedAt).toLocaleDateString()}
            </small>

            {selectedBlog.image && (
              <img src={selectedBlog.image} alt="" className="modal-image" />
            )}

            {selectedBlog.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <button className="close-btn" onClick={() => setSelectedBlog(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
