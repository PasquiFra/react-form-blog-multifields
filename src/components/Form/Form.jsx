import { useState } from "react"

import TitleTag from './TitleTag'
import './formStyle.scss'

const Form = ({ setError }) => {


    const [titles, setTitles] = useState([])
    const [titleValue, setTitleValue] = useState('')

    // setto i campi di input 
    const tagList = ["Bitcoin", "Digital Gold", "Cryptocurrency", "Ethereum", "Tokens"]
    const categoryList = ["Informatics", "Economics", "Finance", "Politics"]
    const inputs = [
        {
            label: "Titolo",
            type: 'text',
            name: 'title',
            placeholder: 'Inserisci un titolo...',
            value: titleValue,
            onChange: (event) => setTitleValue(event.target.value),
            className: 'form-control'
        },
        {
            label: "Descrizione",
            type: 'text',
            name: "content",
            placeholder: 'Inserisci una descrizione...',
            value: "",
            onChange: () => { },
            className: 'form-control'
        },
        {
            label: "Immagine",
            type: 'text',
            name: "image",
            placeholder: 'Inserisci il link ad una immagine',
            value: '',
            onChange: () => { },
            className: 'form-control'
        },
        {
            label: "Categoria",
            type: 'select',
            name: "category",
            placeholder: 'Inserisci una categoria...',
            value: '',
            onChange: () => { },
            className: 'form-select'
        },
        {
            label: "Tags",
            type: 'checkbox',
            name: "tags[]",
            onChange: () => { },
            className: 'ms-2'
        },
        {
            label: "Pubblicato",
            type: 'checkbox',
            name: "published",
            onChange: () => { },
            className: 'ms-2'
        },
    ]

    // Setto l'oggetto data del form per raccogliere i vari campi input

    const setupFormData = {
        title: "",
        content: "",
        image: "",
        category: "",
        tags: [],
        published: null
    }


    const submitForm = (event) => {
        event.preventDefault()
        console.log(event)
        try {

        }
        catch (err) {
            setError(err.message)
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                {inputs.map((input) => {
                    switch (input.type) {
                        case 'checkbox':
                            if (input.name === "tags[]") {
                                return (
                                    <div className="w-100 my-2" key={input.name}>
                                        <label className="form-check-label w-100">
                                            <strong>{input.label}</strong>
                                        </label>
                                        {tagList.map(tag => {
                                            return (
                                                <label
                                                    key={`tag-${tag.toLowerCase().split(' ').join('-')}`}
                                                    className="me-4">
                                                    {tag}
                                                    <input
                                                        id={`tag-${tag.toLowerCase().split(' ').join('-')}`}
                                                        type={input.type}
                                                        name={input.name}
                                                        onChange={input.onChange}
                                                        className={input.className}
                                                    />
                                                </label>
                                            )
                                        })}

                                    </div>
                                );
                            } else {
                                return (
                                    <div className="w-100 my-2" key={input.name}>
                                        <label className="form-check-label" htmlFor={`input-${input.name}`}>
                                            <strong>{input.label}</strong>
                                        </label>
                                        <input
                                            id={`input-${input.name}`}
                                            type={input.type}
                                            name={input.name}
                                            onChange={input.onChange}
                                            className={input.className}
                                        />
                                    </div>
                                )
                            }

                        case 'select':
                            return (
                                <div key={input.name}>
                                    <label className="form-check-label w-100" htmlFor={`input-${input.name}`}>
                                        <strong>{input.label}</strong>
                                    </label>
                                    <select className={input.className} id={`input-${input.name}`}>
                                        <option defaultValue={'selected'}>{input.placeholder}</option>
                                        {categoryList.map((cat, index) => {
                                            return (
                                                <option key={`cat-${cat}`} value={index}>{cat}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            );

                        default:
                            return (
                                <div key={input.name} className=" my-2">
                                    <label className="form-check-label" htmlFor={`input-${input.name}`}>
                                        <strong>{input.label}</strong>
                                    </label>
                                    <input
                                        id={`input-${input.name}`}

                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        value={input.value}
                                        onChange={input.onChange}
                                        className={input.className}
                                    />
                                </div>
                            )
                    }
                })}

                <button type="submit" className="btn btn-success my-3">Aggiungi</button>
            </form>
            <div className="my-4">
                <h3>I titoli dei tuoi articoli:</h3>
                <ul>
                    {
                        titles.map((title, index) => {
                            return (
                                <TitleTag
                                    key={`${title}-${index}`}
                                    title={title} index={index}
                                    updateItem={updateItem}
                                    removeItem={removeItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Form