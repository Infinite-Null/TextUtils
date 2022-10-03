import React from 'react'

export default function Aleart(props) {
    return (
        props.mess && <div>
            <div className={`alert alert-${props.mess.type} alert-dismissible fade show`} role="alert">
                <strong>{props.mess.type}:</strong>{props.mess.message}
            </div>
        </div>
    )
}
