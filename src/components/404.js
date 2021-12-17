
import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Error</h2>
            <p>Sorry we were not able to find that page!</p>
            <Link to='/'>Go Back to Home</Link>
        </div>
     );
}
 
export default NotFound;