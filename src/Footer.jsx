import { Component } from "react";


class Footer extends Component{
    render(){
        return  <footer className="sticky-bottom nav-bg mrgn-top-15">
            <div className="container">
                <div className="text-center p-3">
                    © 2021 
                    <a href="https://www.mrisoftware.com/"> MRI Software LLC</a> – All Rights Reserved.
                </div>
            </div>
        </footer>
    }
}

export default Footer;