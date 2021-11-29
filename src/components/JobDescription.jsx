import React from 'react'

export default function JobDescription(props) {

    return (
        <div className="job-description mt-5">
            <div className="job-description-title">
                <h6>{props.job.candidate_required_location}</h6>
                <h2>{props.job.title}</h2>
                <h3>{props.job.company_name}</h3>
                <div dangerouslySetInnerHTML={{__html: props.job.description}} />
            </div>
        </div>
    )
}