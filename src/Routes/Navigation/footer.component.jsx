
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './navigation.styles.css';

const date = new Date();

function Footer () {
    return(
        <div className="Footer bottom-fixed">
            <p>@ Copyright{date.getFullYear()}</p>
        </div>
    );
}
export default Footer;