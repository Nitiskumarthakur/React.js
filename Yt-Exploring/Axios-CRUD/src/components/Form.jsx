import { useEffect, useState } from "react"
import { postData, updatePost } from "../API/CURDapi"
export default function From({ data, setData, setUpDateData, updateData }) {

    const [post, setPost] = useState({
        title: "",
        body: ""
    });

    const isEmpty = Object.keys(updateData).length === 0;
    //Get the updated Data and add into input field
    useEffect(() => {
        updateData && setPost({
            title: updateData.title || "",
            body: updateData.body || "",
        })

    }, [updateData])

    const handleInutChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setPost((preview) => {
            return {
                ...preview,
                [name]: value,

            }
        })
    }

    //Add post 
    const addPostData = async () => {
        const res = await postData(post);
        console.log(res);

        if (res.status = 201) {
            setData([...data, res.data])
        }
        setPost({
            title: "",
            body: ""
        });
    }
    //update 
    const updatePostData = async () => {
        console.log("click edit")
        try {
            const res = await updatePost(updateData.id, post)

            if (res.status == 200) {
                setData((prev) => {
                    return prev.map((currElem) => {
                        return currElem.id == updateData.id ? res.data : currElem;
                    });
                });
                setUpDateData({});
            }
             
        } catch (error) {
            console.log(error)
        }
    }

    //Submit Btn
    const submitBtn = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if (action === "Add") {
            addPostData();
        } else if (action === "Edit") {
            updatePostData()
        }



    }
    return (
        <form onSubmit={submitBtn}>
            <div>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={post.title}
                    onChange={handleInutChange}
                />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Add Post"
                    id="body"
                    name="body"
                    value={post.body}
                    onChange={handleInutChange}
                />
            </div>
            <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
        </form>
    )
}