//import cleanUp from "./cleanup";


function MaintenanceManuals()
{
    const manualsObj = {
        "206-L4": ["B0223-OM", "J"],
        "407_2": ["B0223-OM4", "F"],
        "429": ["B0238-OM", "E"],
        "407": ["B0244-OM", "C"],
        "525": ["B0247-OM", "A"],
        "505": ["B0249-OM", "B"],



    };
    
    const emailForm = `<section class="formcarry-container">
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

     
    let section = document.getElementById("maintenanceManuals");
    section.innerHTML = `
    <form class="needs-validation" >
    <div class="container" style="display: block; justify-content: center; margin: 2%; ">
    
    <div class="row">
    <div class="col" style="width: 1%">
        <label for="nameInput" style="width: 100%;" class="form-label text-regular">Name
        <input type="text" class="form-control" id="nameInput" ></label>
         
    </div>
    <div class="col" style="width: 1%">
    <label for="jobTitleInput" style="width: 100%;" class="form-label text-regular">Job Title
        <input type="text" class="form-control" id="jobTitleInput" >
        </label>    
    </div>
    </div>


    <div class="row">
      <div class="col">

      <label for="companyNameInput" style="width: 100%;" class="form-label text-regular">Company Name
        <input type="text" class="form-control" id="companyNameInput" >
      </label>
    </div>


      <div class="col">
          <label for="exampleInputEmail1" style="width: 100%;" class="form-label text-regular">Email address
          <input type="email" class="form-control" id="exampleInputEmail1" >
          </label>
      </div>
    </div>
    
    </div>

 </form>
    <div style="justify-content: center; display: grid; border-bottom: 1px solid white;">
      <h4 class="text-regular">Please select which maintenance and overhaul manuals you would like</h4>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col" style="text-align: left;" class="text-regular"></th>
      <th scope="col" style="text-a  lign: left;" class="text-regular">Bell Aircraft</th>
      <th scope="col" style="width: 50%; text-align: left;" class="text-regular">NDI Rotor Brake Maintenance and Overhaul Manual</th>
      <th scope="col" style="text-align: left;" class="text-regular">Revision</th>
    </tr>
  </thead>
  <tbody id="tableBody">

  </tbody>
  </table>

    <button type="button" class="btn btn-primary maintSubmit" id="submitBtn" name="submitBtn">Submit </button>
    
    <div id="warningModal" class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Warning</h5>
        <button type="button" id="closeWarningModal1" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>You cannot leave any field blank and you must select at least one maintenance manual</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="closeWarningModal2" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>



   `;

    function closeModal()
    {
      document.getElementById("warningModal").style.display = "none";

    }

   const closeButton1 = document.getElementById("closeWarningModal1");
   const closeButton2 = document.getElementById("closeWarningModal2");
    closeButton1.onclick = closeModal;
    closeButton2.onclick = closeModal;


    let submitBtn = document.getElementById("submitBtn");

    submitBtn.onclick = () => {
      let checkLstArr = [];

      let valObj = {};
      Object.keys(manualsObj).forEach(key => {
        let checkbox = document.getElementById(`download_${key}`);

        console.log(checkbox.checked, key);
        if (checkbox.checked)
        {
          let keyVal;
          if (key == "407_2")
          {
            keyVal = "407";
          }
          let value = `${keyVal != undefined ? keyVal : key} ${manualsObj[key][0]} ${manualsObj[key][1]}`;

          checkLstArr.push(value);

        }
      });

      if(checkLstArr.length == 0)
      {
        document.getElementById("warningModal").style.display="block";
        return; 
      }

        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("exampleInputEmail1").value;
        let jobTitle = document.getElementById("jobTitleInput").value;
        let companyName = document.getElementById("companyNameInput").value;

        if (name == "" || name == undefined)
        {
            document.getElementById("warningModal").style.display="block";
            return; 
        }
        if (email == "" || name == undefined)
        {
          document.getElementById("warningModal").style.display="block";
          return; 
        }
        if (jobTitle == "" || name == undefined)
        {
          document.getElementById("warningModal").style.display="block";
          return;  
        }
        if (companyName == "" || name == undefined)
        {
          document.getElementById("warningModal").style.display="block";
          return; 
        }

        valObj["name"] = name;
        valObj["email"] = email;
        valObj["jobTitle"] = jobTitle;
        valObj["companyName"] = companyName;


       while(section.firstChild)
        {
          section.removeChild(section.lastChild);

        }
        section.innerHTML = emailForm;

        let nameOutput = document.getElementById("fc-generated-1-name");
        let emailOutput = document.getElementById("fc-generated-1-email");
        let messageArea = document.getElementById("fc-generated-1-message");

         nameOutput.value = valObj["name"];
         emailOutput.value = valObj["email"];
         messageArea.value = `Hello,
         My name is ${valObj["name"]} and I work as a ${valObj["jobTitle"]} for ${valObj["companyName"]}.
         I am requesting access to the following manuals: `;

         checkLstArr.forEach(val => {
          messageArea.value += val + ", "


         });

    };


    let target = document.getElementById("tableBody");
    
    Object.keys(manualsObj).forEach(key => {
        
        let originalKey;
        if(key == "407_2")
        {
          key = "407";
          originalKey = "407_2"
        }
        

        let tr = document.createElement("tr");

        let th = document.createElement("th");

        let inputCheckbox = document.createElement("input");
        inputCheckbox.type="checkbox";
        inputCheckbox.id= originalKey != undefined ? 'download_407_2' : `download_${key}`;
        inputCheckbox.name=originalKey != undefined ? 'download_407_2' : `download_${key}`;
        inputCheckbox.label=originalKey != undefined ? 'download_407_2' : `download_${key}`;
        inputCheckbox.className = "form-check-input";


        th.scope="row";
        th.className = "text-regular";
        th.appendChild(inputCheckbox);
        tr.appendChild(th);

        let td1 = document.createElement("td");
        td1.innerHTML = key;
        td1.className = "text-regular";

        tr.appendChild(td1);

        let td2 = document.createElement("td");

        td2.innerHTML = originalKey != undefined ? "B0223-OM4" : manualsObj[key][0];
        td2.className = "text-regular";
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = originalKey != undefined ? "F" : manualsObj[key][1];
        td3.className = "text-regular";
        tr.appendChild(td3);

        target.appendChild(tr);



    });

    section.hidden = false;

    




}

export default MaintenanceManuals;