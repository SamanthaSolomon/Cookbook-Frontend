import React from "react"

const Form = (props) => {
    return(
        <form>
            <input
                type="text"
                name="title"
                placeholder="Title of cookbook"
            />
            <input 
                type="number"
                name="yearPublished"
                placeholder="Year Published"
            />
            <input 
                type="text"
                name="author"
                placeholder="author"
            />
        </form>
    )
}

export default Form