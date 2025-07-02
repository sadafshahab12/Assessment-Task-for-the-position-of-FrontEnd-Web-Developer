import React from "react";

const projects = [
  {
    name: "Mobile App for Grocery Delivery",
    role: "Frontend Developer",
    status: "In Progress",
    client: "John Doe",
    budget: "$1200",
    deadline: "Sept 15, 2025",
  },
  {
    name: "Portfolio Website",
    role: "Fullstack Developer",
    status: "Completed",
    client: "Sarah Lee",
    budget: "$800",
    deadline: "May 22, 2025",
  },
  {
    name: "Booking System UI",
    role: "UI Designer",
    status: "Paused",
    client: "Rachel Smith",
    budget: "$950",
    deadline: "Oct 3, 2025",
  },
];

const statusColor = {
  Completed: "text-green-600",
  "In Progress": "text-blue-600",
  Paused: "text-yellow-600",
};

const Projects = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Project Name</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Client</th>
              <th className="px-4 py-2 border">Budget</th>
              <th className="px-4 py-2 border">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{project.name}</td>
                <td className="px-4 py-2 border">{project.role}</td>
                <td
                  className={`px-4 py-2 border font-semibold ${
                    statusColor[project.status]
                  }`}
                >
                  {project.status}
                </td>
                <td className="px-4 py-2 border">{project.client}</td>
                <td className="px-4 py-2 border">{project.budget}</td>
                <td className="px-4 py-2 border">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
