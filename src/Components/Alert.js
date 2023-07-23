import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1) + "! : "
    }

    return (
        <div className='my-3' style={{height: '40px'}}>
        {props.alert && <div className="container">
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type !== "success" ? capitalize("success") : capitalize(props.alert.type)}</strong>{props.alert.msg}
            </div>
        </div>}
        </div>
    )
}
