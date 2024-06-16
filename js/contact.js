const emailValidation = (e) =>
{
    console.log(e);
    let value = e.srcElement.value;
    let DomElem = document.getElementById(e.srcElement.id);
    let boolValue = value.match(
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
    console.log(e);

    let body = e.srcElement[2].value;
    let subject = e.srcElement[0].value;
    let responseEmail = e.srcElement[1].value;
    
    let completeBody = body;
    completeBody += "\n" + "--" + subject +"\n" + responseEmail;
    
    console.log(completeBody, subject);
    let anchor = document.createElement("a");
    
    window.open(`mailto:crpplumbers@gmail.com?subject=${subject}&body=${completeBody}`);

}

const ContactForm = () =>
{
    let contactSection = document.getElementById("contact");

    contactSection.innerHTML = `
    <div style="display: grid; text-align: center; justify-content: center;">
        <h5>Email Us</h5>
    </div>
    <form class="form-horizontal" id="formContact" >
    <div class="form-outline mb-4">

        <label class="form-label" for="NameInput">Name</label>
        <input type="text" id="NameInput" class="form-control" required/>
        <div class="valid-tooltip">
            Looks good!
        </div>
    </div>

    <!-- Email input -->
    <div class="form-outline mb-4">
        <label class="form-label" for="form4Example2">Email address</label>
        <input type="email" id="emailContact" class="form-control" required/>
    </div>

    <!-- Message input -->
    <div class="form-outline mb-4">
        <label class="form-label" for="form4Example3">Message</label>
        <textarea class="form-control" id="form4Example3" rows="4" required></textarea>
    </div>
    <!--div class="g-recaptcha" data-sitekey="6Ld5sCwpAAAAAGhSgWmtGT4fZ6m33nmzZSUXp3UJ"></div-->
    <!-- Submit button -->
    
    <button class="btn btn-primary btn-block mb-4" style="width: 100%; border-color: #401C90; background-color: #401C90;" onclick="${emailSubmission}">Send</button>
    </form>
    <div style="justify-content: center; display: grid; margin-top: 15%;">
        <h5>Hours of Operation (PST)</h5>
        <a href="tel:3602533656" style="text-align: center">(360) 253-3656</a> 
        <br>
        <table>
            
            <tr><th>Monday:</th><td>7:30 am - 4:00 pm</td></tr>
            <tr><th>Tuesday:</th><td>7:30 am - 4:00 pm</td></tr>
            <tr><th>Wednesday:</th><td>7:30 am - 4:00 pm</td></tr>
            <tr><th>Thursday:</th><td>7:30 am - 4:00 pm</td></tr>
            <tr><th>Friday:</th><td>7:30 am - 4:00 pm</td></tr>
            <tr><th>Saturday:</th><td>Closed</td></tr>
            <tr><th>Sunday:</th><td>Closed</td></tr>
        </table>

    </div>


    `;

    const emailForm = document.getElementById("formContact");

    emailForm.addEventListener("submit", emailSubmission);
    document.getElementById('emailContact').onchange = emailValidation;
};


export default ContactForm;