<<<<<<< Updated upstream
import About from './about.js';
import GenerateNavBar from './NavBar.js';
import selectedLink from './SelectedLink.js';
import cleanUp from './cleanup.js';
import Services from './Services.js';

const emailForm = document.getElementById("formContact");

const emailValidation = (DomElem, e) =>
{
    console.log(DomElem);
    let boolValue = e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (boolValue == null)
    {
        DomElem.className = "form-control is-invalid";
    }
    else if (boolValue != null)
    {

        DomElem.className = "form-control is-valid";
    }
}

const emailSubmission = (e) =>
{
    e.preventDefault();
    console.log("test", e, About);
}



const linksArray = ['aboutLink', 'servicesLink', 'contactLink'];



window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    const portrait = e.matches;
    let aboutLink = document.getElementById('aboutLink').classList;
    let servicesLink = document.getElementById('servicesLink').classList;

    if (aboutLink.contains("selectedLink"))
    {
        cleanUp('about');
        About(portrait);
    }
    
    else if(servicesLink.contains("selectedLink"))
    {
        cleanUp("services");
        Services(portrait);
    }
    
});


const navBar = GenerateNavBar();
document.getElementById("body").appendChild(navBar);
About(window.matchMedia("(orientation: portrait)").matches);
linksArray.forEach(link=>{
    let targetLink = document.getElementById(link);

    targetLink.onclick = () => selectedLink(targetLink, `${link.replace('Link','')}`);

});

emailForm.addEventListener("submit", emailSubmission);
=======
import About from './about.js';
import GenerateNavBar from './NavBar.js';
import selectedLink from './SelectedLink.js';
import cleanUp from './cleanup.js';
import Services from './Services.js';


const linksArray = ['aboutLink', 'certificationsLink', 'servicesLink', 'contactLink'];



window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    const portrait = e.matches;
    let aboutLink = document.getElementById('aboutLink').classList;
    let servicesLink = document.getElementById('servicesLink').classList;

    if (aboutLink.contains("selectedLink"))
    {
        cleanUp('about');
        About(portrait);
    }
    
    else if(servicesLink.contains("selectedLink"))
    {
        cleanUp("services");
        document.body.style = "height: 100%; overflow-y: scroll;";
        Services(portrait);
    }
    
});


const navBar = GenerateNavBar();
document.getElementById("body").appendChild(navBar);
document.body.style = "height: 100%; overflow-y: hidden;";
About(window.matchMedia("(orientation: portrait)").matches);
linksArray.forEach(link=>{
    let targetLink = document.getElementById(link);

    targetLink.onclick = () => selectedLink(targetLink, `${link.replace('Link','')}`);

});


>>>>>>> Stashed changes
