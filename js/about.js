import detectMob from './util.js';


const About = (isPortrait) =>
{
    let sectionElem = document.getElementById("about");
    
    
    if(!isPortrait)
    {
      sectionElem.innerHTML = `
            <div class="page-header">
                <h1 class="text-center"><!--b>About</b--></h1>
            </div>

            <div style="display: flex;">
                <img src="./assets/helicopterDrawing.webp" class="img-fluid rounded float-start" style="width: 60%; height: auto;" alt="Responsive image">
                
                    <p class="text-start form-horizontal" style="margin-left: 5%;">
                        Northwest Dynamics, Inc. (NDI) is an AS9100D certified company that has
                        been supplying the Aerospace Industry with high quality mechanical and
                        hydro-mechanical components for over 35 years. NDI specializes in hydro-mechanical actuators, 
                        fluidic control valves, rotor brakes, and directional control valves.
                    </p>
                </div>
            <div class="justify-content-center" id="certifications" hidden>
                <div class="row">
                    <div class="col-md-6">    
                        <!--img src="assets\AS9100D_cert.webp" class="" alt="NDI intro image" /-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <!--img src="assets\EASA_Cert.webp" id="#EASA_CERT" alt="NDI intro image" /-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <!--img src="assets\FAA_CERT.webp" id="#FAA_CERT" alt="NDI intro image" /-->
                    </div>
                </div>
            </div>`;
    }
    else
    {
        sectionElem.innerHTML = `
        <div class="page-header">
            <h1 class="text-center"><!--b>About</b--></h1>
        </div>

        <div >
            <img src="./assets/helicopterDrawing.webp" class="rounded mx-auto d-block" style="width: 100%; height: auto;" alt="Responsive image">
        
                <p class="text-center form-horizontal" >
                    Northwest Dynamics, Inc. (NDI) is an AS9100D certified company that has
                    been supplying the Aerospace Industry with high quality mechanical and
                    hydro-mechanical components for over 35 years. NDI specializes in hydro-mechanical actuators, 
                    fluidic control valves, rotor brakes, and directional control valves.
                </p>
            </div>
        <div class="justify-content-center" id="certifications" hidden>
            <div class="row">
                <div class="col-md-6">    
                    <img src="assets\AS9100D_cert.webp" class="" alt="NDI intro image" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="assets\EASA_Cert.webp" id="#EASA_CERT" alt="NDI intro image" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="assets\FAA_CERT.webp" id="#FAA_CERT" alt="NDI intro image" />
                </div>
            </div>
        </div>`;
    }

    sectionElem.hidden = false;
    
}


export default About;