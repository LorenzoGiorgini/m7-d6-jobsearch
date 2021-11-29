import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import JobDescription from "../components/JobDescription";

import SpinnerB from "../components/SpinnerB";

export default function Company() {

  const companyId = useParams().companyId

  const [company, setCompany] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchCompanyInfo = async () => {
    const request = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${companyId}&limit=10`)
    if (request.ok) {
      const data = await request.json();
      console.log(data)
      setCompany(data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyInfo()
  }, [])

  return (
    loading === true ? (
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <SpinnerB />
        </div>
      ) : (
        <Container>
          <Row>
            {company.map((job) => (
                <JobDescription job={job}/>
            ))}
          </Row>
        </Container>
      )
  )
}