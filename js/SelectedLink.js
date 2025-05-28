import Services  from "./Services.js";
import About from "./about.js";
import ContactForm from "./contact.js";
import cleanUp from "./cleanup.js";
import Certifications from "./certifications.js";
import BusinessModel from "./BusinessModel.js";

const headerDict = {
    "about": "About", "businessModel": "Business Model", "services": "Services",
    "contact": "Contact", "certifications": "Certifications"
};


const getContent = async (elementId) =>
{
    
    let listIndexes = [];
    let targetLink = 0;

    const idList = Object.keys(headerDict);

    idList.forEach(id =>
    {
        if (id === elementId) {
            targetLink = idList.indexOf(id);

        }
        else {
            listIndexes.push(id);
        }
    });

    listIndexes.forEach(other => {

        let otherElem = document.getElementById(other);
        otherElem.hidden = true;

    })

    const element = document.getElementById(idList[targetLink]);
    if (idList[targetLink] === 'about')
    {
        document.body.style = "height: 100%; overflow-y: hidden;";
        cleanUp("emailSection");
        cleanUp("maintenanceManuals");
        cleanUp('about');
        About(window.matchMedia('(orientation: portrait)').matches);
    }
    else if (idList[targetLink] === 'services')
    {
        document.body.style = "height: 100%; overflow-y: scroll;";
        cleanUp("emailSection");
        
        cleanUp("maintenanceManuals");
        cleanUp('services');
        Services(window.matchMedia('(orientation: portrait)').matches);
    }

    else if(idList[targetLink] === 'contact')
    {
        document.body.style = "height: 100%; overflow-y: scroll;";
        cleanUp("emailSection");
        
        cleanUp("maintenanceManuals");
        cleanUp('contact');
        ContactForm();
        element.hidden = false;
    
    }
    else if(idList[targetLink] === "businessModel")
    {
        cleanUp("emailSection");
        
        cleanUp("maintenanceManuals");
        cleanUp("businessModel");
        BusinessModel();
    }
    else
    {
        cleanUp("emailSection");
        
        cleanUp("maintenanceManuals");
        cleanUp("certifications");
        Certifications()
    }
    element.className = "fade-in-text";

}

const transition = async (prevElem) =>
{
    const idList = Object.keys(headerDict);

    console.log(idList);
    prevElem.className = "nav-item nav-link";
    let prevTarget = prevElem.id.replace("Link", "");
    console.log(prevTarget);
    let idx = idList.indexOf(prevTarget);
    console.log(idList[idx], idx);
    var prevDiv = document.getElementById(idList[idx]);
    prevDiv.className = "hidden";

    //document.getElementById('#header').className = "text-center hidden";
    
}


const selectedLink = async (originatingElem, elementId) =>
{
    const prevElem = document.getElementsByClassName("selectedLink")[0];
    
    if (prevElem != null) {
        await transition(prevElem);
    }
    else
    {
        await transition(document.getElementById("aboutLink"));
    }
    window.scrollTo(0,0);
    console.log(originatingElem);
    originatingElem.className = "nav-item nav-link selectedLink";
    console.log(elementId);
    await getContent(elementId);
}


export default selectedLink;