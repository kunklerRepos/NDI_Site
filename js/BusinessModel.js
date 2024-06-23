
const BusinessModel = () =>
{

    document.body.style = "height: 100%; overflow-y: scroll;";
    let section = document.getElementById("businessModel");

    section.innerHTML = ` <div style="display: flex; justify-content: center;">
                            <img src="assets/managementPrinciples.png" class="img-fluid rounded float-start" style="width: 50%; height: auto;"/>
                          </div>
                    <div style="text-align: center; margin-top: 2%;">
                        <p class="text-regular form-horizontal">
                            NDI management recognizes that continual product quality and customer satisfaction can only be sustained by effective operation of the various related business processes within an organization. NDI has adopted a process approach to manage the various functions within the organization by establishing and implementing a Business and Quality Management System as Illustrated above.
                            
                            </p>
                    </div>
`;
    section.hidden = false;
}

export default BusinessModel;