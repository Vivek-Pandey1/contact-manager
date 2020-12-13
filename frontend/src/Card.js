import React from 'react'

export default function Card({ entry }) {
    return (
        <div className="entryCard">
            <div className="leftPane">
                <span className="empName">{entry.name}</span> <br />
                <span className="empTitle">{entry.title}</span>
            </div>
            <div className="rightPane">
                <i class="fas fa-mobile-alt"></i> {entry.phone} <br />
                <i class="fas fa-map-marker-alt"></i> {entry.address} <br />
                <i class="fas fa-sticky-note"></i> {entry.note}
            </div>
        </div>
    )
}
