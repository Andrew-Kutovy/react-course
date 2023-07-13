import React, {useRef} from 'react';
import styles from "../CreateUserPage/CreateUserPage.module.css";

const DeleteCarPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleDelete();
    }

    const handleDelete = async () => {
        try {
            const id = idValue.current.value;
            const data = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                })
            })
            const response = await data.json()
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }

    const idValue = useRef('')

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
            <label > enter ID of car to delete, :<br/>
                <input type="number" ref={idValue}/>
            </label>
            <button type="submit">delete Car</button>
        </form>
    );
};

export default DeleteCarPage;