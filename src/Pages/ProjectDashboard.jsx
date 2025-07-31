import React, { useState } from 'react';
import './ProjectDashboard.scss';

const ProjectDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    image: '',
    source_code_link: '',
    view: '',
    tags: []
  });
  const [newTag, setNewTag] = useState({ name: '', color: '' });

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '123') {
      setIsAuthenticated(true);
      setShowDashboard(true);
      setPassword('');
    } else {
      alert('Wrong password! Please try again.');
      setPassword('');
    }
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...newProject,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    setProjects([...projects, projectData]);
    setNewProject({
      name: '',
      description: '',
      image: '',
      source_code_link: '',
      view: '',
      tags: []
    });
    alert('Project added successfully!');
  };

  const addTag = () => {
    if (newTag.name && newTag.color) {
      setNewProject({
        ...newProject,
        tags: [...newProject.tags, newTag]
      });
      setNewTag({ name: '', color: '' });
    }
  };

  const removeTag = (index) => {
    const updatedTags = newProject.tags.filter((_, i) => i !== index);
    setNewProject({ ...newProject, tags: updatedTags });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setShowDashboard(false);
    setPassword('');
  };

  if (!showDashboard) {
    return (
      <section id="dashboard" className="padding-horizontal dashboard-container">
        <div className="dashboard-auth">
          <div className="auth-card">
            <h2>🔐 Project Dashboard</h2>
            <p>Enter password to access the dashboard</p>
            <form onSubmit={handlePasswordSubmit}>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="auth-btn">
                Access Dashboard
              </button>
            </form>
            {/* <small>Hint: Password is 123</small> */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard" className="padding-horizontal dashboard-container">
      <div className="dashboard-header">
        <h2>📊 Project Dashboard</h2>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>

      <div className="dashboard-content">
        <div className="upload-section">
          <h3>➕ Add New Project</h3>
          <form onSubmit={handleProjectSubmit} className="project-form">
            <div className="form-row">
              <div className="input-group">
                <label>Project Name</label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="input-group">
                <label>Project Image URL</label>
                <input
                  type="url"
                  value={newProject.image}
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Description</label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Describe your project..."
                rows="4"
                required
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Source Code Link (GitHub)</label>
                <input
                  type="url"
                  value={newProject.source_code_link}
                  onChange={(e) => setNewProject({ ...newProject, source_code_link: e.target.value })}
                  placeholder="https://github.com/username/repo"
                />
              </div>
              <div className="input-group">
                <label>Live Demo Link</label>
                <input
                  type="url"
                  value={newProject.view}
                  onChange={(e) => setNewProject({ ...newProject, view: e.target.value })}
                  placeholder="https://your-project-demo.com"
                />
              </div>
            </div>

            <div className="tags-section">
              <label>Technologies Used</label>
              <div className="tag-input">
                <input
                  type="text"
                  placeholder="Tag name (e.g., React)"
                  value={newTag.name}
                  onChange={(e) => setNewTag({ ...newTag, name: e.target.value })}
                />
                <select
                  value={newTag.color}
                  onChange={(e) => setNewTag({ ...newTag, color: e.target.value })}
                >
                  <option value="">Select color</option>
                  <option value="reactnative">Blue (React/Frontend)</option>
                  <option value="mongodb">Green (Database)</option>
                  <option value="nodejs">Orange (Backend)</option>
                  <option value="kotlin">Purple (Mobile)</option>
                  <option value="android">Red (Framework)</option>
                  <option value="expressjs">Yellow (Library)</option>
                </select>
                <button type="button" onClick={addTag} className="add-tag-btn">
                  Add Tag
                </button>
              </div>

              <div className="tags-preview">
                {newProject.tags.map((tag, index) => (
                  <span key={index} className={`tag ${tag.color}`}>
                    #{tag.name}
                    <button type="button" onClick={() => removeTag(index)}>×</button>
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-btn">
              🚀 Add Project
            </button>
          </form>
        </div>

        <div className="projects-list">
          <h3>📁 Uploaded Projects ({projects.length})</h3>
          <div className="projects-grid">
            {projects.length === 0 ? (
              <div className="no-projects">
                <p>No projects uploaded yet. Add your first project above!</p>
              </div>
            ) : (
              projects.map((project) => (
                <div key={project.id} className="project-preview">
                  <img src={project.image} alt={project.name} />
                  <div className="project-info">
                    <h4>{project.name}</h4>
                    <p>{project.description.substring(0, 100)}...</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className={`tag ${tag.color}`}>
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.source_code_link && (
                        <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                      {project.view && (
                        <a href={project.view} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDashboard;
