import React from 'react'

function FormError({error}) {
    if(!error) {
        return;
    }


    return (
        <div className="invalid-feedback d-block">{error}</div>
    )
}

export default FormError
