import cleanUp from "./cleanup";
import EmailForm from "./emailform";

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


    let section = document.getElementById("maintenanceManuals");
    section.innerHTML = `
    <div style="display: block; justify-content: center; margin: 2%; ">
    
    <div style="display: flex;">
        <label for="nameInput" style="width: 100%; margin-left: 5%" class="form-label text-regular robofont">Name
        <input type="text" class="form-control" id="nameInput" ></label>
        <label for="jobTitleInput" style="width: 100%; margin-right: 5%" class="form-label text-regular robofont">Job Title
        <input type="text" class="form-control" id="jobTitleInput" >
        </label>     
    </div>
    
    
    <div style="display: flex;">
    <label for="companyNameInput" style="width: 100%; margin-left: 5%" class="form-label text-regular robofont">Company Name
    <input type="text" class="form-control" id="companyNameInput" >

    </label>
    

    <label for="exampleInputEmail1" style="width: 100%; margin-right: 5%" class="form-label text-regular robofont">Email address
    <input type="email" class="form-control" id="exampleInputEmail1" >
    </label>
    </div>

    
    </div>
    <h4 class="text-regular">Please select which maintenance and overhaul manuals you would like</h4>

    <table class="table">
  <thead>
    <tr>
      <th scope="col" style="text-align: left;" class="text-regular"></th>
      <th scope="col" style="text-align: left;" class="text-regular">Bell Aircraft</th>
      <th scope="col" style="width: 50%; text-align: left;" class="text-regular">NDI Rotor Brake Maintenance and Overhaul Manual</th>
      <th scope="col" style="text-align: left;" class="text-regular">Revision</th>
    </tr>
  </thead>
  <tbody id="tableBody">

  </tbody>
  </table>

    <button type="button" class="btn btn-primary maintSubmit" id="submitBtn" name="submitBtn">Submit </button`;

    let submitBtn = document.getElementById("submitBtn");

    submitBtn.onclick = () => {
      let checkLstArr = [];


      Object.keys(manualsObj).forEach(key => {
        let checkbox = document.getElementById(`download_${key}`);

        console.log(checkbox.checked, key);
        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("exampleInputEmail1").value;
        let jobTitle = document.getElementById("jobTitleInput").value;
        let companyName = document.getElementById("companyNameInput").value;

        let submitObj = {};

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