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
            <h4>Projects</h4>
            <p class="text-muted">
                NDI management recognizes that continual product quality and customer satisfaction can only be sustained by effective operation of the various related business processes within an organization. Therefore, NDI has adopted the process approach to manage the various functions within the organization by establishing and implementing a Business and Quality Management System described in this manual.

                The eight quality management principles (Figure 1) are embraced by NDI management and are used by the organization to lead toward continual improvement.
            </p>
        </div>
        <div class="col-md-6">
            <h4>Business</h4>
            <p class="text-muted">
                NDI is an engineering and manufacturing aerospace company with a product portfolio that includes proprietary landing gear system, actuator, valve, damper, and rotor brake designs.  
                Having been approached with several new business opportunities, NDI remains very selective and focuses on only a small percentage of programs that are deemed most appropriate and viable.
            </p>
        </div>
        <div class="col-md-6">
            <img src="assets/image001 (2).jpg" class="rounded-circle img-fluid">

        </div>
        <div class="col-md-6">
            <img src="assets/image001.jpg" class="rounded-circle img-fluid">
        </div>
        <div class="col-md-6">
            <h4>ipsum lorem</h4>
            <p>To preserve core skills and remain flexible, NDI has developed a low overhead structure centered on the key functions of engineering, quality assurance, production control, production machining and assembly and test.  NDI utilized a comfortable mix of in-house machining and subcontracted operations of various components. This approach yields a very efficient business model with the ability to quickly expand or contract based on the business climate of the industry. This model has proven to be very successful with NDI weathering numerous recessions as well as the recent unprecedented pandemic.</p>
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
            <h4>Projects</h4>
            <p class="text-muted">
                NDI management recognizes that continual product quality and customer satisfaction can only be sustained by effective operation of the various related business processes within an organization. Therefore, NDI has adopted the process approach to manage the various functions within the organization by establishing and implementing a Business and Quality Management System described in this manual.

                The eight quality management principles (Figure 1) are embraced by NDI management and are used by the organization to lead toward continual improvement.
            </p>
        </div>
        
        <div class="col-md-6">
            <img src="assets/image001 (2).jpg" class="rounded-circle img-fluid">

        </div>
        <div class="col-md-6">
            <h4>Business</h4>
            <p class="text-muted">
                NDI is an engineering and manufacturing aerospace company with a product portfolio that includes proprietary landing gear system, actuator, valve, damper, and rotor brake designs.  
                Having been approached with several new business opportunities, NDI remains very selective and focuses on only a small percentage of programs that are deemed most appropriate and viable.
            </p>
        </div>
        <div class="col-md-6">
            <img src="assets/image001.jpg" class="rounded-circle img-fluid">
        </div>
        <div class="col-md-6">
            <h4>ipsum lorem</h4>
            <p>To preserve core skills and remain flexible, NDI has developed a low overhead structure centered on the key functions of engineering, quality assurance, production control, production machining and assembly and test.  NDI utilized a comfortable mix of in-house machining and subcontracted operations of various components. This approach yields a very efficient business model with the ability to quickly expand or contract based on the business climate of the industry. This model has proven to be very successful with NDI weathering numerous recessions as well as the recent unprecedented pandemic.</p>
        </div>
    </div>
        `;
    }

    servicesSection.hidden = false;
};


export default Services;