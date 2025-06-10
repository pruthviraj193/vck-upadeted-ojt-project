import React from 'react';

const ContactPage = () => {
    return (
        <div id="root">
             <div id="back">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                <h2>General Enquiries</h2>
                <hr/>
                <p> Vivekanand College Main Campus<br/>
                    [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br/>
                    India<br/>
                    Phone: **+91 12345 67890**<br/>
                    Email: **info@vivekanandcollege.edu**<br/>
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br/>
                </p>
                <h2>Admissions Office</h2>
                <hr/>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
                    Phone: +91 98765 43210<br/>
                    Email: admissions@vivekanandcollege.edu<br/>
                </p>
                <h2>Student Support Services</h2>
                <hr/>
                <p>For current student support, academic advising, or general assistance:<br/>
                    Phone: +91 87654 32109<br/>
                    Email: studentsupport@vivekanandcollege.edu<br/>
                </p>
                <h2>Find Us on the Map</h2>
                <hr/>
                <p>[You can embed a Google Map here later using an iframe or a React map library].<br/>
                    View on Google Maps</p>
                <h2>Send Us a Message</h2>
                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
             </div>
        </div>
    );
};

export default ContactPage;