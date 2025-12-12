import { useState } from "react";
import { useFormik } from 'formik';

export default function CommentsForm({ addNewComment }) {

    // let [formData, setFormData] = useState({
    //     userName: "",
    //     remark: "",
    //     rating: 5
    // });
    // let handleInputChange = (event) =>{
    //     setFormData((currData) =>{
    //         return {
    //             ...currData, [event.target.name]:event.target.value
    //         }
    //     })
    // }
    // let handleSubmit = (event) =>{
    //     console.log(formData);
    //     addNewComment(formData)
    //     event.preventDefault();
    // }
    // return (
    //     <div>
    //         <h4>Given Comment!</h4>
    //         <form onSubmit={handleSubmit}>
    //             <label htmlFor="username">UserName</label>
    //             <input placeholder="Enter Username" type="text" id="username" value={formData.userName} onChange={handleInputChange} name="userName"></input>
    //             <br></br><br></br>
    //             <label htmlFor="text">Feedback Area</label>
    //             <textarea placeholder="Enter feedback" id="text" value={formData.remark} onChange={handleInputChange} name="remark"></textarea>
    //             <br></br>
    //             <input type="number"  value={formData.rating} min={1} max={5} onChange={handleInputChange} name="rating"/>
    //             <br></br><br></br>
    //             <button>Submit</button>    
    //         </form>
    //     </div>
    //);

    //-------------START LEARTING FORMIK FOR VALIDATIONS.-----------------

    const validate = values => {
        const errors = {};
        if (!values.userName) {
            errors.userName = 'Required';
        } else if (values.userName.length > 15) {
            errors.userName = 'Must be 15 characters or less';
        }

        // if (!values.lastName) {
        //     errors.lastName = 'Required';
        // } else if (values.lastName.length > 20) {
        //     errors.lastName = 'Must be 20 characters or less';
        // }

        // if (!values.email) {
        //     errors.email = 'Required';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //     errors.email = 'Invalid email address';
        // }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            userName: '',
            remark: '',
            rating: 4,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <h4>Given Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input placeholder="Enter Username" type="text" id="username" value={formik.values.userName} onChange={formik.handleChange} name="userName"></input>
                {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
                <br></br><br></br>
                <label htmlFor="text">Feedback Area</label>
                <textarea placeholder="Enter feedback" id="text" value={formik.values.remark} onChange={formik.handleChange} name="remark"></textarea>
                <br></br>
                <input type="number" value={formik.values.rating} min={1} max={5} onChange={formik.handleChange} name="rating" />
                <br></br><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}