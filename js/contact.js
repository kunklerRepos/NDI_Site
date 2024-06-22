
const ContactForm = () =>
{
    let contactSection = document.getElementById("contact");

    contactSection.innerHTML = `<section class="formcarry-container">
    <form action="https://formcarry.com/s/Fzv_zezSXYq" method="POST" enctype="multipart/form-data">
      
      <div class="formcarry-block">
        <label class="form-label text-regular" for="fc-generated-1-name">Full Name</label>
        <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
      </div>
        
      <div class="formcarry-block">
        <label class="form-label text-regular" for="fc-generated-1-email">Your Email Address</label>
        <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
      </div>
        
      <div class="formcarry-block">
        <label class="form-label text-regular" for="fc-generated-1-message">Your message</label>
        <textarea name="message" name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
      </div>
        
      <div class="formcarry-block">  
        <button type="submit" class="btn btn-primary btn-block mb-4" style="width: 100%; border-color: #401C90; background-color: #401C90;">Send</button>
      </div>
    
    </form>
    <div style="justify-content: center; display: grid; margin-top: 15%;">
        <h5 class="text-regular">Hours of Operation (PST)</h5>
        <a href="tel:3602533656" style="text-align: center">(360) 253-3656</a> 
        <br>
        <table>
            
            <tr><th class="text-regular">Monday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Tuesday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Wednesday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Thursday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Friday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Saturday:</th><td class="text-regular">Closed</td></tr>
            <tr><th class="text-regular">Sunday:</th><td class="text-regular">Closed</td></tr>
        </table>

    </div>

  </section>`;

    /*contactSection.innerHTML = `
    <div style="display: grid; text-align: center; justify-content: center;">
        <h5 class="text-regular">Email Us</h5>
    </div>
    <form class="form-horizontal" id="formContact" >
    <div class="form-outline mb-4">

        <label class="form-label text-regular" for="NameInput">Name</label>
        <input type="text" id="NameInput" class="form-control" required/>
        <div class="valid-tooltip">
            Looks good!
        </div>
    </div>

    <!-- Email input -->
    <div class="form-outline mb-4">
        <label class="form-label text-regular" for="form4Example2">Email address</label>
        <input type="email" id="emailContact" class="form-control text-regular" required/>
    </div>

    <!-- Message input -->
    <div class="form-outline mb-4">
        <label class="form-label text-regular" for="form4Example3">Message</label>
        <textarea class="form-control text-regular" id="form4Example3" rows="4" required></textarea>
    </div>
    <!--div class="g-recaptcha" data-sitekey="6Ld5sCwpAAAAAGhSgWmtGT4fZ6m33nmzZSUXp3UJ"></div-->
    <!-- Submit button -->
    
    <button class="btn btn-primary btn-block mb-4" style="width: 100%; border-color: #401C90; background-color: #401C90;" onclick="${emailSubmission}">Send</button>
    </form>
    <div style="justify-content: center; display: grid; margin-top: 15%;">
        <h5 class="text-regular">Hours of Operation (PST)</h5>
        <a href="tel:3602533656" style="text-align: center">(360) 253-3656</a> 
        <br>
        <table>
            
            <tr><th class="text-regular">Monday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Tuesday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Wednesday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Thursday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Friday:</th><td class="text-regular">7:30 am - 4:00 pm</td></tr>
            <tr><th class="text-regular">Saturday:</th><td class="text-regular">Closed</td></tr>
            <tr><th class="text-regular">Sunday:</th><td class="text-regular">Closed</td></tr>
        </table>

    </div>


    `;

    const emailForm = document.getElementById("formContact");

    emailForm.addEventListener("submit", emailSubmission);
    document.getElementById('emailContact').onchange = emailValidation;*/



};


export default ContactForm;