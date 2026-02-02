import { getPost, deletePost } from "../API/CURDapi";
import { useState, useEffect } from "react";
import Form from "./Form";
export default function Posts() {

    const [data, setData] = useState([]);
    const [updateData, setUpDateData] = useState({});

    //Get post with API
    const getpostData = async () => {
        const getdata = await getPost();
        console.log(getdata);
        const s = getdata.data.slice(0, 10);
        setData(getdata.data);
    }

    useEffect(() => {
        getpostData();
    }, []);

    //delte post with API.
    const Deletebtn = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const newUpdatedPosts = data.filter((pre) => pre.id !== id);
                setData(newUpdatedPosts);
            }
        } catch (error) {
            console.log(error)
        }
    }
    //Updata post
    const handleUbdateBtn = (curr)=>setUpDateData(curr);
    // console.log(updateData)
    return (
        <>
            <section className="section-form">
              <Form  
                data={data} 
                setData={setData}
                updateData={updateData}
                setUpDateData={setUpDateData}
              />
            </section>
            <section className="section-post">
                <ol>
                    {
                        data.map((curr) => {
                            const { id, title, body } = curr
                            return (
                                <li key={id} typeof="">
                                    <p>Title : {title}</p>
                                    <p>Boby : {body}</p>
                                    <button onClick={()=>handleUbdateBtn(curr)}>Edit</button>
                                    <button className="btn-delete" onClick={() => Deletebtn(id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ol>
            </section>
        </>
    )
}