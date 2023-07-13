import React, {useRef} from 'react';
import styles from "../CreateUserPage/CreateUserPage.module.css";

const CreateCarPage = () => { //
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreate();
    }

    const handleCreate = async () => {
        try {
            const data = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    brand: brandValue.current.value,
                    price: priceValue.current.value,
                    year: yearValue.current.value,
                })
            })
            const response = await data.json()
            console.log(response)
        } catch (e) {}
    }

    const brandValue = useRef('')
    const priceValue = useRef('')
    const yearValue = useRef('')

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
            <label > brand:<br/>
                <input type="text" ref={brandValue}/>
            </label>
            <label > price:<br/>
                <input type="number" ref={priceValue}/>
            </label>
            <label > year:<br/>
                <input type="number" ref={yearValue}/>
            </label>
            <button type="submit">create new Car</button>
        </form>
    );
};

export default CreateCarPage;