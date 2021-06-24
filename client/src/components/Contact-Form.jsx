import React from 'react'
import { useState } from 'react'

export default function ContactForm(props) {


    let [fullName, setFullName] = useState("");
    let [email, setEmail] = useState("");
    let [subject, setSubject] = useState("")
    let [content, setContent] = useState("")





    let [emailSuccess, setEmailSuccess] = useState(true)

    function handleSubmit() {
       setEmailSuccess(false)
   
        if (emailSuccess) {
            console.log("Sent to parent")
            props.success(emailSuccess)

            setFullName("")
            setEmail("")
            setSubject("")
            setContent("")
        }

    }

  

    return (
        <div>
            <form action="/send-email" method="POST" id="send-email" onSubmit={handleSubmit} >
                <div className="form-container">
                    <div className="form-subcontainer">
                        <input className="input-type-1" type="text" value={fullName} id="full-name" name="full-name" placeholder="Got a Name?" onChange={(e) => setFullName(e.target.value)}></input>

                        <input type="email" value={email} id="your-email" name="your-email" placeholder="What's you're email?" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div className="form-subcontainer">
                        <input type="text" value={subject} id="email-subject" name="email-subject" placeholder="To what do I owe the pleasure? (Subject)" onChange={(e) => setSubject(e.target.value)}></input>
                    </div>
                    <div className="form-subcontainer">
                        <textarea type="text" value={content} id="email-content" name="email-content" placeholder="What's on your mind?" onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>

                <button id="submit-button" type="submit">Send!</button>
                </div>
            </form>

        </div>
    )
}
