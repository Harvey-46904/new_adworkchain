import React from "react";
import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";
class Items extends React.Component {
  
    render() { 
        return ( 
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    <FullpageSection style={{height:'100vh'}}>
                    <div className="centrado_total">
                        <h1 style={{color:'black'}}>Hola mundo</h1>
                    </div>
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>
                    <div className="centrado_total">
                        <h1  style={{color:'black'}}>soy</h1>
                    </div>
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>
                    <div className="centrado_total">
                        <h1  style={{color:'black'}}>el programador</h1>
                    </div>
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>
                    <div className="centrado_total">
                        <h1  style={{color:'black'}}>harvey</h1>
                    </div>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
         );
    }
}
 
export default Items;