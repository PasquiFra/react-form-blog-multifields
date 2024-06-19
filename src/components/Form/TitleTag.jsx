import { useState } from "react"
import { IoTrashBinOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const TitleTag = ({ title, index, updateItem, removeItem }) => {

    const [updateField, setUpdateField] = useState(false)
    const [newTitle, setNewTitle] = useState('')


    const handleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const setUpdate = () => {
        setNewTitle(title)
        setUpdateField(true)
    }

    const handleUpdate = () => {
        setUpdateField(false)
        updateItem(index, newTitle)
    }

    const renderField = () => {
        if (updateField === true) {
            return (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={handleChange}
                    />
                    <button onClick={handleUpdate}>Salva</button>
                </>
            )
        } else {
            return title
        }
    }

    return (
        <li>
            {renderField()}
            <FaEdit className="editIcon ms-3" type="button" onClick={setUpdate} />
            <IoTrashBinOutline className="trashIcon ms-3" type="button" onClick={() => removeItem(index)} />
        </li>
    )
}

export default TitleTag