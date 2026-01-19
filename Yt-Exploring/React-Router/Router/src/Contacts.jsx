import './Contacts.css';
export default function Contacts(){
    return(
        <div class="contactus-form-container" id="contact">
            <div class="container">
                <h1 class="contactus-heading">Contact me</h1>
                <h3 class="contactus-sub-heading">Question, Thoughts, Or Just Want To Say Hello?</h3>

                <div class="contactus-form-container">
                    <form class="form" action="">
                        <div class="formfield-container">
                            <input class="formfield" type="text" name="name" id="" placeholder="Enter your Name" />
                            <input class="formfield" type="email" name="email" id="" placeholder="Enter your Email" />
                            <input class="formfield" type="text" name="subject" id=""
                                placeholder="Enter your Subject" />
                            <textarea name="message" id="" cols="30" rows="10" class="formfield formfield-textarea"
                                placeholder="Enter your message"></textarea>
                        </div>

                        <div>
                            <button type="submit" class="btn-pink" id="submit-btn">Send Message</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}