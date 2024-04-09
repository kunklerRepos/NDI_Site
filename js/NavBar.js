
const GenerateNavBar = () => 
{
   let nav = document.createElement("nav");
   nav.id="navBar";
   nav.className = "navbar navbar-expand-lg navbar-light navbar-bg-light navMenu";
   nav.innerHTML = `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <p class="navbar-brand mx-auto my-auto robofont"><b>Northwest Dynamics Inc.</b></p>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link selectedLink" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" id="aboutLink" href="#">About</a>
                            <a class="nav-item nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" id="certificationsLink" href="#">Certifications</a>
                            <a class="nav-item nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" id="servicesLink" href="#">Services</a>
                            <a class="nav-item nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" id="contactLink" href="#">Contact</a>
                        </div>
                    </div>`;

    return nav;
}


export default GenerateNavBar;