import React from 'react'

const Alert = (props) => {

    const capitalize = (word) => {
        if(word === 'danger'){
            word = 'Error' 
        }
        const lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    }
    return (
        props.alert &&
        <div className={`alert alert-${props.alert.type}`} role="alert">
            {capitalize(props.alert.type)} : {props.alert.message}
        </div>
    )
}

export default Alert
