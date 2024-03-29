import React from 'react'
import UseForm from './UseForm'
import ValidateInfo from './ValidateInfo';
import './FormLog.css';
import axios from 'axios';
import { useState, useEffect } from "react";

const FormSignup = ({ submitForm }) => {
    const [Services, setServices] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const signup = () => {

        axios.post("http://localhost:2000/admin/create", {
            nom: values.nom,
            prenom: values.prenom,
            email: values.email,
            numero: values.numero,
            role: values.role,
            profession: values.profession,
            password: values.pswd,
            password1: values.pswd1

        }).then((Response) => {
            console.log(Response);
        });

    };
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:2000/service");
                if (!response.ok) throw Error("les données n'ont pas été reçus");
                const listItems = await response.json();
                setServices(listItems);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => fetchItems(), 1000);

    }, [])

    const { handlechange, values, HandleSubmit, errors } = UseForm(submitForm, ValidateInfo);
    let tab = Services.map((serv) => serv.service)
    return (
        <div className='form-content-right'>
            <form className='form-signup' onSubmit={HandleSubmit} noValidate>
                <h1>
                    Créez un nouveau compte en remplissant ce formulaire !!
                </h1>
                <div className='form-iput-line'>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Nom
                        </label>
                        <input
                            id='nom'
                            type="text"
                            name='nom'
                            className='form-input'
                            placeholder='Saisir le nom'
                            value={values.nom}
                            onChange={handlechange} />

                        {errors.nom && <p>{errors.nom}</p>}
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Prénom
                        </label>
                        <input
                            id='prenom'
                            type="text"
                            name='prenom'
                            className='form-input'
                            placeholder='Saisir le prénom'
                            value={values.prenom}
                            onChange={handlechange} />

                        {errors.prenom && <p>{errors.prenom}</p>}
                    </div>
                </div>
                <div className='form-iput-line'>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Adresse email
                        </label>
                        <input
                            id='email'
                            type="email"
                            name='email'
                            className='form-input'
                            placeholder="Saisir l'adresse email"
                            value={values.email}
                            onChange={handlechange} />

                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='usernum' className='form-label'>
                            Numéro de téléphone
                        </label>
                        <input
                            id='numero'
                            type="text"
                            name='numero'
                            className='form-input'
                            placeholder='Saisir le numéro de téléphone'
                            value={values.numero}
                            onChange={handlechange} />

                        {errors.numero && <p>{errors.numero}</p>}
                    </div>
                </div>
                <div className='form-iput-line'>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Rôle
                        </label>
                        <select id='role'
                            type="text"
                            name='role'
                            className='form-input'
                            value={values.role}
                            onChange={handlechange}>
                            <option value="Choisir un rôle" selected> Choisir un rôle</option>
                            <option value="administrateur-secondaire">administrateur-secondaire</option>
                            <option value="responsable d'aiguillage">responsable d'aiguillage</option>
                            <option value="responsable des RE">responsable des RE</option>
                            <option value="chef de service">chef de service</option>
                        </select>
                        {errors.role && <p>{errors.role}</p>}
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Profession
                        </label>
                        <select id='profession'
                            type="text"
                            name='profession'
                            className='form-input'
                            placeholder='Choisir une profession'
                            value={values.profession}
                            onChange={handlechange}>
                            <option value="Choisir une profession" selected> Choisir une profession</option>

                            {
                                (values.role === 'chef de service') ? <>
                                    {tab.map((serv) =>

                                        <option key={serv} value={serv}>{serv}</option>
                                    )}
                                </> : <><option value="directeur">directeur</option>
                                    <option value="directeur-adjoint">directeur-adjoint</option>
                                    <option value="SG">SG</option>
                                    <option value="simple emplyée">simple emplyé</option></>
                            }

                        </select>
                        {errors.profession && <p>{errors.profession}</p>}
                    </div>
                </div>
                <div className='form-iput-line'>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Mot de passe
                        </label>
                        <input
                            id='pswd'
                            type="password"
                            name='pswd'
                            className='form-input'
                            placeholder='introduire un mot de passe'
                            value={values.pswd}
                            onChange={handlechange} />

                        {errors.pswd && <p>{errors.pswd}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Comfirmation du mot de passe
                        </label>
                        <input
                            id='pswd1'
                            type="password"
                            name='pswd1'
                            className='form-input'
                            placeholder='Comfirmer le mot de passe'
                            value={values.pswd1}
                            onChange={handlechange} />

                        {errors.pswd1 && <p>{errors.pswd1}</p>}
                    </div>
                </div>



                <button className='form-input-btn' type='submit' onClick={signup}>
                    <p> Créer le compte  </p>
                </button>

            </form>
        </div>
    )
}

export default FormSignup