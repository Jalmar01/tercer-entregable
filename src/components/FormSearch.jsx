import { useRef, useState } from "react"
import "./styles/formSearch.css"

const FormSearch = ({setIdLocation}) => {

    const idLocationValue = useRef()

    const [inputIsEmpty, setInputIsEmpty] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = idLocationValue.current.value.trim()
        
        if(inputValue === "") {  
            setInputIsEmpty(true)
            setTimeout(() => {
                setInputIsEmpty(false)
            }, 3000)  
        } else {
            setIdLocation(inputValue)
        }
        
    }


  return (
    <>
         <form className="form" onSubmit={handleSubmit}>
            <input 
                className="input"
                placeholder="Enter id Location" 
                type="text" 
                ref={idLocationValue}
            />
            <button className="search">Search</button>
        </form>
        {
            inputIsEmpty && <h3>This field is required...👀</h3>
        }
    </>
   
  )
}

export default FormSearch