const Services = (isPortrait) => 
{
    let servicesSection = document.getElementById('services');

    if (!isPortrait)
    {
        servicesSection.innerHTML = `
        
    <div class="row">
        <div class="col-md-6">
            <img src="assets/image001 (1).jpg" class="rounded-circle img-fluid"/>
        </div>
        <div class="col-md-6">
                <h4 class="text-regular">Products</h4>
            <p class="text-regular">
            NDI specializes in the design, development and manufacturing of hydro-mechanical actuators, directional control valves and fluidic control valve for the Aerospace industry.
            Our products include utility and landing gear actuators, door damper devices and rotor brake components (brake calipers, master cylinders and discs).
            </p>
        </div>
        <div class="col-md-6">
            <h4 class="text-regular">Values</h4>
            <p class="text-regular">
                NDI strives to meet or exceed customer requirements to deliver quality products on time and is committed to creating a company-wide environment of quality consciousness through continual improvement.
            </p>
        </div>
        <div class="col-md-6">
            <img src="assets/image001 (2).jpg" class="rounded-circle img-fluid">

        </div>
        <div class="col-md-6">
            <img src="assets/image001.jpg" class="rounded-circle img-fluid">
        </div>
        <div class="col-md-6">
            <h4 class="text-regular">Strategy</h4>
            <p class="text-regular">NDI utilized a comfortable mix of in-house machining and subcontracted operations of various components. This approach yields a very efficient business model with the ability to quickly expand or contract based on the business climate of the industry. This model has proven to be very successful with NDI weathering numerous recessions as well as the recent unprecedented pandemic.</p>
        </div>
    </div>
        `;
    }
    else
    {
        servicesSection.innerHTML =  `<div class="row">
        <div class="col-md-6">
            <img src="assets/image001 (1).jpg" class="rounded-circle img-fluid"/>
        </div>
        <div class="col-md-6">
            <h4 class="text-regular">Products</h4>
            <p class="text-regular">
                NDI specializes in the design, development and manufacturing of hydro-mechanical actuators, directional control valves and fluidic control valve for the Aerospace industry.
                Our products include utility and landing gear actuators, door damper devices and rotor brake components (brake calipers, master cylinders and discs).
            </p>
        </div>
        
        <div class="col-md-6">
            <img src="assets/image001 (2).jpg" class="rounded-circle img-fluid">

        </div>
        <div class="col-md-6">
            <h4 class="text-regular">Values</h4>
            <p class="text-regular">
                NDI strives to meet or exceed customer requirements to deliver quality products on time and is committed to creating a company-wide environment of quality consciousness through continual improvement.
            </p>
        </div>
        <div class="col-md-6">
            <img src="assets/image001.jpg" class="rounded-circle img-fluid">
        </div>
        <div class="col-md-6">
            <h4 class="text-regular">Strategy</h4>
            <p class="text-regular">
                To preserve core skills and remain flexible, NDI has developed a low overhead organizational structure centered on the key functions of engineering, quality assurance, production control, production machining and assembly and test.
            </p>
        </div>
    </div>`;
    }

    servicesSection.hidden = false;
};


export default Services;