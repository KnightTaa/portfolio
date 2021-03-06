import "./contact.css"

import Call from "../../img/call.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com'

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8f2zqx4', 'template_1jj6ddp', formRef.current, 'user_4ss8bx2DeaePAMVNh2g9M')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Call} alt="" className="c-icon" />
                            +94 763417877
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            tnilmina@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Location} alt="" className="c-icon" />
                            36/B Uva-Pelwatta 91112, Sri-Lanka
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
