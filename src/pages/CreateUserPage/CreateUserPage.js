import React, {useState} from 'react';
import styles from './CreateUserPage.module.css';

const CreateUserPage = () => {
     let [formValues, setFormValues] = useState({
         id: '', name: '', username: '', email: '', address: '', street: '', suite: '', city: '', zip: '',
         geo: '', lat: '', lng: '', phone: '', website: '', company: '', nameComp : '', catchPhrase: '', bs: ''
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
         console.log(formValues)
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
                <label > company:<br/>
                    <input type="text" value={formValues.company} onChange={(e)=>handleFormChange(e, 'company')}/>
                </label>
                <label > name:<br/>
                    <input type="text" value={formValues.nameComp} onChange={(e)=>handleFormChange(e, 'nameComp')}/>
                </label>
                <label > catchPhrase:<br/>
                    <input type="text"/>
                </label>
                <label > bs:<br/>
                    <input type="text" value={formValues.bs} onChange={(e)=>handleFormChange(e, 'bs')}/>
                </label>
                <button type="submit">create user</button>
            </form>
    );
};

export default CreateUserPage;