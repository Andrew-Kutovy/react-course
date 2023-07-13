import React, {useRef} from 'react';
import styles from "../CreateUserPage/CreateUserPage.module.css";

const ChangeCarPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleDelete();
    }

    const handleDelete = async () => {
        try {
            const id = idValue.current.value;
            const data = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    brand: brandValue.current.value,
                    price: priceValue.current.value,
                    year: yearValue.current.value,
                })
            })
            const response = await data.json()
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }

    const idValue = useRef('')
    const brandValue = useRef('')
    const priceValue = useRef('')
    const yearValue = useRef('')

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
            <label > enter ID of car to change, :<br/>
                <input type="number" ref={idValue}/>
            </label>
            <label > brand:<br/>
                <input type="text" ref={brandValue}/>
            </label>
            <label > price:<br/>
                <input type="number" ref={priceValue}/>
            </label>
            <label > year:<br/>
                <input type="number" ref={yearValue}/>
            </label>
            <button type="submit">change Car</button>
        </form>
    );
};

export default ChangeCarPage;