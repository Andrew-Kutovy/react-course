import React, {useState} from 'react';
import styles from './CreateUserPage.module.css';

const CreateUserPage = () => {
     let [formValues, setFormValues] = useState({
         id: '', name: '', username: '', email: '', address: '', street: '', suite: '', city: '', zip: '',
         geo: '', lat: '', lng: '', phone: '', website: ''
     })
    const handleFormChange = (e, key) => {
        e.preventDefault()
        setFormValues((prevState) => {
            return {
                ...prevState,
                [key] : e.target.value
            }
        })
    }
     const handleSubmit = (event) => {
         event.preventDefault();
         handleCreate();
     }

     const handleCreate = async () => {
         try {
            const data = await fetch('http://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(formValues)
            })
            const response = await data.json()
             console.log(response)
         } catch (e) {}
     }

    return (
            <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
                <label > id:<br/>
                    <input type="text" value={formValues.id} onChange={(e)=>handleFormChange(e, 'id')} autoComplete={'off'}/>
                </label>
                <label > name:<br/>
                    <input type="text" value={formValues.name} onChange={(e)=>handleFormChange(e, 'name')} autoComplete={'off'}/>
                </label>
                <label > username:<br/>
                    <input type="text" value={formValues.username} onChange={(e)=>handleFormChange(e, 'username')}/>
                </label>
                <label > email:<br/>
                    <input type="text" value={formValues.email} onChange={(e)=>handleFormChange(e, 'email')}/>
                </label>
                <label > address:<br/>
                    <input type="text" value={formValues.address} onChange={(e)=>handleFormChange(e, 'address')}/>
                </label>
                <label > street:<br/>
                    <input type="text" value={formValues.street} onChange={(e)=>handleFormChange(e, 'street')}/>
                </label>
                <label > suite:<br/>
                    <input type="text" value={formValues.suite} onChange={(e)=>handleFormChange(e, 'suite')}/>
                </label>
                <label > city:<br/>
                    <input type="text" value={formValues.city} onChange={(e)=>handleFormChange(e, 'city')}/>
                </label>
                <label > zip code:<br/>
                    <input type="text" value={formValues.zip} onChange={(e)=>handleFormChange(e, 'zip')}/>
                </label>
                <label > geo:<br/>
                    <input type="text" value={formValues.geo} onChange={(e)=>handleFormChange(e, 'geo')}/>
                </label>
                <label > lat:<br/>
                    <input type="text" value={formValues.lat} onChange={(e)=>handleFormChange(e, 'lat')}/>
                </label>
                <label > lng:<br/>
                    <input type="text" value={formValues.lng} onChange={(e)=>handleFormChange(e, 'lng')}/>
                </label>
                <label > phone:<br/>
                    <input type="text" value={formValues.phone} onChange={(e)=>handleFormChange(e, 'phone')}/>
                </label>
                <label > website:<br/>
                    <input type="text" value={formValues.website} onChange={(e)=>handleFormChange(e, 'website')}/>
                </label>
                <button type="submit">create user</button>
            </form>
    );
};

export default CreateUserPage;