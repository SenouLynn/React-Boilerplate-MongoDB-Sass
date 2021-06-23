import React from 'react'
import { useState } from 'react'
export default function Contact() {

    let [fullName, setFullName] = useState("");
    let [email, setEmail] = useState("");
    let [subject, setSubject] = useState("")
    let [content, setContent] = useState("")

    return (
        <div className="contact-full">
            <div className="contact-viewport">
                <form action="/send-email" method="POST" id="send-email">
                    <div className="form-container">
                        <div>
                            <input type="text" value={fullName} id="full-name" name="full-name" placeholder="What's you're Name?" onChange={(e) => setFullName(e.target.value)}></input>

                            <input type="email" value={email} id="your-email" name="your-email" placeholder="What's you're email?" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>

                        <div>
                            <input type="text" value={subject} id="email-subject" name="email-subject" placeholder="To what do I owe the pleasure? (Subject)" onChange={(e) => setSubject(e.target.value)}></input>
                        </div>
                        <div>
                            <textarea type="text" value={content} id="email-content" name="email-content" onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>

                    </div>
                        <input type="submit"></input>

                </form>


            </div>
        </div>
    )
}
