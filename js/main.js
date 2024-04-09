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


