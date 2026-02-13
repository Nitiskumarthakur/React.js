export default function Contacts(){
    
    const handleInput = (formData)=>{
       const InpData = Object.fromEntries(formData.entries());
       console.log(InpData);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact us</h2>
            
            <div className="contact-wrapper conatiner">
                <form action={handleInput}>
                    <input 
                       type="text" 
                       name="usename" 
                       required
                       autoComplete="off"
                       placeholder="Enter your Name"
                    />
                    <input 
                       type="email" 
                       name="email" 
                       required
                       autoComplete="off"
                       placeholder="Enter your Email"
                    />
                    <textarea
                       className="form-control" 
                       name="message"
                       rows="10" 
                       required
                       autoComplete="off" 
                       placeholder="Write something Message"
                    />
                    <button type="submit" value="send">Send</button>
                    
                </form>
            </div>
        </section>
    )
}