import detectMob from './util.js';


const About = (isPortrait) =>
{
    let sectionElem = document.getElementById("about");
    document.body.style = "height: 100%; overflow-y: scroll";
    
    if(!isPortrait)
    {
      sectionElem.innerHTML = `
            <div id="Box" class="box">
               

                <div style="display: flex; justify-content: center;">
                    <img src="./assets/Bell.jfif" class="img-fluid rounded float-start" style="width: 30%; height: auto;" alt="Responsive image">
                
                    
                </div>
                <div style="text-align: center; margin-top: 2%;">
                <p class="form-horizontal text-regular" >
                        Northwest Dynamics, Inc. (NDI) is an AS9100D certified company that has
                        been supplying the Aerospace Industry with high quality mechanical and
                        hydro-mechanical components for over 35 years.
                    </p>
                    
                    
                </div>
            </div>
            `;

    }
    else
    {
        sectionElem.innerHTML = `
        <div class="page-header">
            <h1 class="text-center"><!--b>About</b--></h1>
        </div>

        <div id="Box" class="box">

            <img src="./assets/Bell.jfif" class="rounded mx-auto d-block" style="width: 100%; height: auto;" alt="Responsive image">
            <div style="text-align: center; margin-top: 2%;">
                <p class="text-center form-horizontal text-regular" >
                    Northwest Dynamics, Inc. (NDI) is an AS9100D certified company that has
                    been supplying the Aerospace Industry with high quality mechanical and
                    hydro-mechanical components for over 35 years.
                </p>
            </div>
        </div>

        `;
    }

    sectionElem.hidden = false;
    
}


export default About;