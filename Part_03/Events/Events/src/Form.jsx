function handleformSubmit(event) {
    event.preventDefault();
    console.log("form submited");
}
export default function Form() {
    return (
        <form>
            <input type="text" placeholder="Write something......." />
            <button onClick={handleformSubmit}>Submit!</button>

        </form>
    )
}