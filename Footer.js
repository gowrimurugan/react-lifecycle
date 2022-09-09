import { Component } from "react";


class Footer extends Component{
     componentDidMount(){
        console.log("Mounted");
     }
    
    render(){
        return(
            <footer>
                <p>By,Gowri.
                </p>
            </footer>
        )
    }
}

export default Footer;