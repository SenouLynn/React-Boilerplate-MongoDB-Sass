import React from 'react'
import { useState , useEffect} from 'react'
import ContactForm from './Contact-Form';

export default function Contact() {

    useEffect(() => {

        if (emailSuccess) {
            fetch("/email")
                .then((res) => res.json())
                .then((res) => {
                    if (res === true) {
                        alert("Message Sent! I'll get back to you as soon as possible!");
                    } else if (res === false) {
                        alert("Message failed to send");
                    }
                })
        }
    })

    let [emailSuccess, setEmailSuccess] = useState(false)
  
    let handleCallback = (childdata) => {
        setEmailSuccess(childdata)
    }

    return (
        <div id="Contact"className="contact-full">
            <div className="contact-viewport">

            <h3>Let's <span className="title-highlight">touch</span> base!</h3>
            <hr></hr>
            <ContactForm success = {handleCallback}/>
            </div>
        </div>
    )
}
