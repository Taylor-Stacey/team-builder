import React from "react";

export default function Member(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on getting your member details... </h3>
    }

    return (
        <div className="member container">
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}