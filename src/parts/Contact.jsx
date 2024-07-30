import React from 'react';


const Contact = () => {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
      };
    return(
    <div className="grand_wrapper contact_wrapper">
        {/* <form action="{search}">
        <input name="query" />
        <button type="submit">Search</button>
        </form> */}
    </div>
    );
    
};

export default Contact;
