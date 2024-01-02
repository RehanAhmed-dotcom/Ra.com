import { useParams } from 'react-router-dom';
function ProjectsDetail() {
    const { slug } = useParams();
    return (
      <div style={{ padding: 20 }}>
        <h2>Projects Detail View</h2>
        <p>{`This is ${slug}${slug==1?"st":slug==2?"nd":slug==3?"rd":'th'} Project`} </p>
        {/* <Link to={`/projects/1`}>
                      <div className="btn">View Details</div>
                   </Link> */}

      </div>
    );
  }
  export default ProjectsDetail;