import React from "react";
import FondoIncubadora from "../components/Incubadoras/FondoIncubadora";
import FotosIncubadoras from "../components/Incubadoras/FotosIncubadoras";


class Incubadoras extends React.Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <FondoIncubadora/>
                <FotosIncubadoras/>
                
            </React.Fragment>

        );
    }
}
 
export default  Incubadoras;