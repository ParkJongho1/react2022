import React from "react";
import {Link} from "react-router-dom";

function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <Link to="mailto:godhojong1@gmail.com">godhojong1@gmail.com</Link>
            </div>
            <div>
                <h4>Kakao</h4>
                <Link to="/">hojongpark99</Link>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><Link to="/">Youtube</Link></li>
                    <li><Link to="/">Instargram</Link></li>
                    <li><Link to="/">Github</Link></li>
                    <li><Link to="/">Cafe</Link></li>
                    <li><Link to="/">Reference</Link></li>
                    <li><Link to="/">Tutorials</Link></li>
                    <li><Link to="/">CSS</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;