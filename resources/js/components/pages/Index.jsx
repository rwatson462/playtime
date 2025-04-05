import {Link} from "react-router";

export function Index() {
    return (
        <div>
            <ul>
                <li><Link to={'/cars'}>Cars</Link></li>
                <li><Link to={'/dogs'}>Dogs</Link></li>
            </ul>
        </div>
    )
}
