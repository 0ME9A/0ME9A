import React, { useRef, useState } from 'react'
import './Contact.sass'
import 'react-icons/hi'
import { ImWhatsapp } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import Header from '../Header/Header'

function Contact() {
    const form = useRef();
    const [userName, setUserName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    function handleChange(e) {
        switch (e.target.name) {
            case 'email':
                setMail(e.target.value)
                break;
            case 'to_name':
                setUserName(e.target.value)
                break
            case 'message':
                setMessage(e.target.value)
                break
            default:
                break;
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        
        const nameRegexp = /^[a-zA-Z]+$/;
        const  mailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        const name = e.target[0].value
        const mail = e.target[1].value
        const post = e.target[2].value

        const verifyName = name.length > 3 && name.match(nameRegexp)

        if (verifyName && post.length > 15 && mail.match(mailRegexp)) {
            emailjs.sendForm('service_so0dizh', 'template_1nzxk3s', form.current, 'DX1BDezZMMIxIwkFh').then((result) => {
                result.status === 200 ? alert("you mail has been sent.") : alert("Error: Searver not found!")
            }, (error) => {
                alert("Error: Server not found!")
            })
            setUserName('')
            setMail('')
            setMessage('')
        }
        else {
            alert('Invalid name, email or message.')
        }

    };
    return (
        <div className="container" id='contact'>
            <Header title="connect with the creator" stitle="contact" />
            <article>
                <div className="cards-container">
                    <div className="card active-card">
                        <ImWhatsapp className='icon' />
                        <strong>9304982636</strong>
                        <a href="tel:+919304982636" className='l-space'>send a message</a>
                    </div>
                    <div className="card">
                        <MdEmail className='icon' />
                        <strong>baliramk505@gmail.com</strong>
                        <a href="mailto:baliramk505@gmail.com" className='l-space'>send a message</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="to_name">Username</label>
                    <input
                        type="text"
                        name="to_name"
                        id="to_name username"
                        value={userName}
                        required
                        onChange={(e) => { handleChange(e) }}
                    />
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={mail}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <label htmlFor="message">message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        required
                        onChange={(e) => { handleChange(e) }}
                    ></textarea>
                    <div className="btn-container">
                        <button
                            type='submit'
                            value='submit'
                        >send</button>
                    </div>
                </form>
            </article>
        </div>
    )
}


export default Contact