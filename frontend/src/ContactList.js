import React from 'react'
import Card from './Card'

export default function ContactList({ contacts }) {
    return (
        contacts.map(entry => {
            return <Card key={entry.id} entry = {entry} />
        })
    )
}
