import React, {useRef} from 'react';
import styles from "../CreateUserPage/CreateUserPage.module.css";

const CreateCommentPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(idValue.current.value, postIdValue.current.value, nameValue.current.value,
        //     emailValue.current.value, bodyValue.current.value)
        handleCreate();
    }

    const handleCreate = async () => {
        try {
            const data = await fetch('http://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                //body: JSON.stringify(formValues)
            })
            const response = await data.json()
            console.log(response)
        } catch (e) {}
    }

    const postIdValue = useRef('')
    const idValue = useRef('')
    const nameValue = useRef('')
    const emailValue = useRef('')
    const bodyValue = useRef('')

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
            <label > postId:<br/>
                <input type="text" ref={postIdValue}/>
                </label>
            <label > id:<br/>
                <input type="text" ref={idValue}/>
            </label>
            <label > name:<br/>
                <input type="text" ref={nameValue}/>
                </label>
            <label > email:<br/>
                <input type="text" ref={emailValue}/>
                </label>
            <label > body:<br/>
                <input type="text" ref={bodyValue}/>
                </label>
            <button type="submit">create comment</button>
        </form>
    );
};

export default CreateCommentPage;