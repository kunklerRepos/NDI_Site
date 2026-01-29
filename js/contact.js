import cleanUp from './cleanup.js';
import EmailForm from './emailform.js';
import MaintenanceManuals from './maintenanceManuals.js';


const ContactForm = () =>
{
    const contactSection = document.getElementById("contact");

    

    contactSection.innerHTML = `
    <div style="justify-content: center; display: grid;">
        <div class="card">
              <h5 class="card-title text-regular" style="margin-left: 2%;">Contact</h5>
          <div class="card-body">
            <div class="col">
            <div class="row">
            
            <h5 class="card-header text-regular">Operating Monday-Friday: 7:30 - 4:00 (PST)</h5>
        
            <h5 class=" text-regular">Phone: <a href="tel:3602533656" style="text-align: center text-regular">(360) 253-3656</a></h5>
              
                <a href="#" id="maintManuals" style="text-align: center text-regular">Obtain Maintenance and Overhaul Manuals</a>
              
            </div>
            <div class="row" style="margin-top: 10%; justify-content: center;">
                <button type="button" id="emailBtn" class="btn text-regular" style="outline: white 2px solid; width: 90%;">Email</button>
              
            </div>
          </div>
        </div>

    </div>`;

    const maintenanceManuals = document.getElementById("maintManuals");

    maintenanceManuals.addEventListener("click", () => {
      cleanUp("contact");
      MaintenanceManuals();

    });

   const EmailButton = document.getElementById("emailBtn");
   
   EmailButton.onclick = () => {
      cleanUp("contact")
      contactSection.hidden = true;
      EmailForm();
    

   };


};


export default ContactForm;