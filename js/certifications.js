const Certifications = () => {


    document.body.style = "height: 100%; overflow-y: scroll;";
    let section = document.getElementById("certifications");

    section.innerHTML = `
    <div class="row" style="justify-content: center; margin-top: 5%;">
    <!-- Gallery item -->
    <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div class="bg-white rounded shadow-sm"><img src="./assets/FAA_CERT.webp" alt=""  class="img-fluid card-img-top">
        <div class="p-4">
          <h5> Certified FAA Repair Station</h5>
          <p class="small text-muted mb-0">Northwest Dynamics, Inc. if a certified FAA Repair Station</p>
          
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Gallery item -->
    <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div class="bg-white rounded shadow-sm"><img src="./assets/EASA_Cert.webp" alt="" style="height: 140px; margin-left: 6%;" class="img-fluid card-img-top">
        <div class="p-4">
          <h5> EASA Certified</h5>
          <p class="small text-muted mb-0">Northwest Dynamics, Inc. is EASA certified</p>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Gallery item -->
    <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div class="bg-white rounded shadow-sm"><img src="./assets/AS9100D_cert.webp" 
        alt="AS9100D_cert" class="img-fluid card-img-top">
        <div class="p-4">
          <h5> AS9100D Certified</h5>
          <p class="small text-muted mb-0">Northwest Dynamics, Inc. is AS9100D Certified</p>
        </div>
      </div>
    </div>
</div>`;

section.hidden = false;


}

export default Certifications;