<<<<<<< Updated upstream
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


=======
import detectMob from './util.js';


const About = (isPortrait) =>
{
    let sectionElem = document.getElementById("about");
    document.body.style = "height: 100%; overflow-y: hidden;";
    
    if(!isPortrait)
    {
      sectionElem.innerHTML = `
            <div id="Box" class="box">
               

                <div style="display: flex; justify-content: center;">
                    <img src="./assets/helicopterDrawing.webp" class="img-fluid rounded float-start" style="width: 60%; height: auto;" alt="Responsive image">
                
                    
                </div>
                <div style="text-align: center; margin-top: 2%;">
                <p class="form-horizontal" >
                        Northwest Dynamics, Inc. (NDI) is an AS9100D certified company that has
                        been supplying the Aerospace Industry with high quality mechanical and
                        hydro-mechanical components for over 35 years.
                    </p>
                    
                    <a class="form-horizontal" id="continueLink" href="#">See our Business Model</a>
                    
                </div>
            </div>
            <div id="hidBox" class="hid-box">
                
                    <div style="display: flex; justify-content: center;">
                        <img src="assets/managementPrinciples.png" class="img-fluid rounded float-start" style="width: 33%; height: auto;"/>
                    </div>
                    <div style="text-align: center; margin-top: 2%;">
                        <p class="text-muted form-horizontal">
                            NDI management recognizes that continual product quality and customer satisfaction can only be sustained by effective operation of the various related business processes within an organization. NDI has adopted a process approach to manage the various functions within the organization by establishing and implementing a Business and Quality Management System as Illustrated above.
                            
                            </p>
                            <a href="#" class="form-horizontal" id="BackLink">Back</a>
                    </div>
                
            </div>`;


            let continueLink = document.getElementById("continueLink");
            continueLink.addEventListener("click", () => {
                document.getElementById("Box").style = "display: none;";
                document.getElementById("hidBox").style="margin-top: 0px";
            });

            let backLink = document.getElementById("BackLink");
            backLink.addEventListener("click", ()=>{
                document.getElementById("hidBox").style="margin-top: 150%;";
                document.getElementById("Box").style = "display: block;";
            });
    }
    else
    {
        sectionElem.innerHTML = `
        <div class="page-header">
            <h1 class="text-center"><!--b>About</b--></h1>
        </div>

        <div id="Box" class="box">

            <img src="./assets/helicopterDrawing.webp" class="rounded mx-auto d-block" style="width: 100%; height: auto;" alt="Responsive image">
            <div style="text-align: center; margin-top: 2%;">
                <p class="text-center form-horizontal" >
                    Northwest Dynamics, Inc. (NDI) is an AS9100D certified company that has
                    been supplying the Aerospace Industry with high quality mechanical and
                    hydro-mechanical components for over 35 years.
                </p>
                <a class="form-horizontal" id="continueLink" href="#">See our Business Model</a>
            </div>
        </div>
        <div id="hidBox" class="hid-box">
                
                    <div style="display: flex; justify-content: center;">
                        <img src="assets/managementPrinciples.png" class="img-fluid rounded float-start" style="width: 100%; height: auto;"/>
                    </div>
                    <div style="text-align: center; margin-top: 2%;">
                        <p class="text-muted form-horizontal">
                            NDI management recognizes that continual product quality and customer satisfaction can only be sustained by effective operation of the various related business processes within an organization. NDI has adopted a process approach to manage the various functions within the organization by establishing and implementing a Business and Quality Management System as Illustrated above.
                            
                            </p>
                            <a href="#" class="form-horizontal" id="BackLink">Back</a>
                    </div>
                
            </div>

        `;

        let continueLink = document.getElementById("continueLink");
            continueLink.addEventListener("click", () => {
                document.getElementById("Box").style = "display: none;";
                document.getElementById("hidBox").style="margin-top: 0px";
            });

            let backLink = document.getElementById("BackLink");
            backLink.addEventListener("click", ()=>{
                document.getElementById("hidBox").style="margin-top: 150%;";
                document.getElementById("Box").style = "display: block;";
            });
    }

    sectionElem.hidden = false;
    
}


>>>>>>> Stashed changes
export default About;