import React, { useState } from "react";

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tags: "",
    image: "",
    source_code_link: "",
    view: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(",").map((tag) => ({
      name: tag.trim(),
      color: "default",
    }));

    const newProject = {
      ...formData,
      tags: tagsArray,
    };

    setProjects([...projects, newProject]);
    setFormData({
      name: "",
      description: "",
      tags: "",
      image: "",
      source_code_link: "",
      view: "",
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          className="w-full border p-2"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          className="w-full border p-2"
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2"
          name="source_code_link"
          placeholder="GitHub Link"
          value={formData.source_code_link}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2"
          name="view"
          placeholder="Live Site Link"
          value={formData.view}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover mb-3" />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="flex flex-wrap mt-2 gap-1">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-gray-200 text-xs rounded">
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="mt-2 space-x-2">
              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  GitHub
                </a>
              )}
              {project.view && (
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
