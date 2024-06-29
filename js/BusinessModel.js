
const BusinessModel = () =>
{

    document.body.style = "height: 100%; overflow-y: scroll;";
    let section = document.getElementById("businessModel");

    section.innerHTML = `<div style="display: flex; justify-content: center;">
                                <img src="assets/managementPrinciples.png" class="img-fluid rounded float-start" style="width: 50%; height: auto;"
                                id="myImg"/>
                          </div>
                          <div style="text-align: center; margin-top: 2%;">
                            <p class="text-regular form-horizontal">
                            NDI management recognizes that continual product quality and customer satisfaction can only be sustained by effective operation of the various related business processes within an organization. NDI has adopted a process approach to manage the various functions within the organization by establishing and implementing a Business and Quality Management System as Illustrated above.
                            </p>
                        </div>
                        
                        <div id="myModal" class="modal">
                            <span style="top: 5%; right: 1%;" class="close">&times;</span>
                            <img class="modal-content" id="img01">
                            <div id="caption"></div>
                        </div>`;
    section.hidden = false;

    var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        let img = document.getElementById("myImg");
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
        modal.style.display = "none";
        }
}

export default BusinessModel;