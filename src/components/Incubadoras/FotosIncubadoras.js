import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../../assets/img/piece.jpg'
import foto2 from '../../assets/img/power.jpg'
import '../../styles/estilos_incubadoras.css'



function FotosIncubadoras () {
    return (  


        <React.Fragment>
            <div className="container-fluid  contain_inc">
                <div className="row justify-content-center">
                    <div className=" col-md-6">
                    <p className="titulo_inc text-center">INCUBADORA</p>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <img className="img-fluid" src={foto1}></img>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid" src={foto2}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Nunc id dignissim lorem. Fusce lacus mi, convallis vel
                              fringilla sed, rhoncus eu massa. Donec ultricies, orci
                               lobortis semper pulvinar, mi purus scelerisque mi, a
                                eleifend eros sapien ut eros. Sed libero lorem, scelerisque
                                 non mi sit amet, sollicitudin aliquet lacus. Curabitur
                                  rutrum fringilla nibh ut pulvinar. Suspendisse non
                                   ligula sed sapien luctus pellentesque varius vitae
                                    velit. Nunc a ultricies nunc, et tincidunt tortor.
                                     Cras auctor aliquet lectus vel auctor. Mauris nisi
                                      turpis, pretium in eleifend sed, aliquet a mi.
                                       Maecenas id dolor risus. Quisque semper mauris 
                                       orci, vitae dapibus augue semper ut.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>


    );
}

export default FotosIncubadoras;