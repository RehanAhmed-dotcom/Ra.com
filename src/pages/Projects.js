import { useNavigate, Link } from 'react-router-dom';
function Projects() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Projects View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        <Link to={`/Projects/1`}>
                      <div className="btn">1st Project</div>
                   </Link>
                   <Link to={`/Projects/2`}>
                      <div className="btn">2nd Project</div>
                   </Link>
                   <Link to={`/Projects/3`}>
                      <div className="btn">3rd Project</div>
                   </Link>
                   <Link to={`/Projects/4`}>
                      <div className="btn">4th Project</div>
                   </Link>

      </div>
    );
  }
  export default Projects;