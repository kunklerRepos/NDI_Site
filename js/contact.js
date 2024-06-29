
const ContactForm = () =>
{
    let contactSection = document.getElementById("contact");

    contactSection.innerHTML = `<section class="formcarry-container">
  <form action="https://formcarry.com/s/CVOTjwYv8iC" method="POST" enctype="multipart/form-data">
    
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
      <button class="btn btn-primary btn-block mb-4" style="width: 100%; border-color: #401C90; background-color: #401C90;" type="submit">Send</button>
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

 
};


export default ContactForm;