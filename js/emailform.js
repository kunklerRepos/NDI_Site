const EmailForm = () => {
    let emailSection = document.getElementById("emailSection");
    emailSection.hidden = false;
    emailSection.innerHTML = `
    <section class="formcarry-container">
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
  </section>`;





}

export default EmailForm;