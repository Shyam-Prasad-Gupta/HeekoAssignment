import React from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {
    return(
        <div className="mt-2">
            Home page content
        </div>
    )
}

export default withRouter(Home);