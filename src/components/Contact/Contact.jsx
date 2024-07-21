import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5409ec14-7968-4081-99fb-109967eb97f9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact
            information below.Your feedback,questions, and suggestions are
            impoertant to us.
        </p>
        <ul>
            <li><img src={phone_icon} alt="" />UK : +44-7537 144372</li>
            <li><img src={phone_icon} alt="" />India : +91-9176966446</li>
            <li><img src={phone_icon} alt="" />Landline : +91-44-42124284
            (Between 9.00 am – 6.00 pm IST)</li>
            <li><img src={phone_icon} alt="" />For existing clients: +91-8754446693</li>
            <li><img src={phone_icon} alt="" />Customer Care: +91-9384672299</li>
            <li><img src={mail_icon} alt="" />Email: info@phdassistance.com</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required/>
            <label>Write your message here </label>
            <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
