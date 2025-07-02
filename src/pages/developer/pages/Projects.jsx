import { projects } from "../../../data/project";

const statusColor = {
  Completed: "bg-green-700",
  "In Progress": "bg-blue-700",
  Pending: "bg-red-700",
};

const Projects = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front of Card */}
              <div className="flip-card-front project-card p-4 sm:p-6 rounded shadow-sm shadow-secondary">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-sm text-gray-700 ">
                  Deadline: {project.deadline}
                </p>
                <p
                  className={`mt-2 font-medium widgets-tag ${statusColor[project.status]}`}
                >
                  {project.status}
                </p>
              </div>

              {/* Back of Card */}
              <div className="flip-card-back p-4 sm:p-6 rounded shadow-sm shadow-secondary space-y-2 bg-primary">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-sm">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="text-sm">
                  <strong>Status:</strong> {project.status}
                </p>
                <p className="text-sm">
                  <strong>Client:</strong> {project.client}
                </p>
                <p className="text-sm">
                  <strong>Budget:</strong> {project.budget}
                </p>
                <p className="text-sm">
                  <strong>Deadline:</strong> {project.deadline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
