import React from 'react'
import { UrlFor } from './urlBuilder'

export default function CloudImage({ publicId, className }) {

    const imageUri = UrlFor(publicId)

    return (
        <img src={imageUri} className={`${className}`} />
    )
}
