import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Typeahead } from "react-bootstrap-typeahead";
import "./search-form.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

const airports = [
  "Pune (PNQ)",
  "Munich (MUC)",
  "Berlin (BRLN)",
  "Mumbai (BOM)",
  "Frankfurt (FRA)",
];

const ErrorLabel = (props) => {
  return <label style={{ color: "red" }}>{props.message}</label>;
};

export const SearchForm = (props) => {
  let origin, destination;
  const [status, setFormValid] = useState({ isValid: false });
  let invalidFields = {};
  const isReturn = false;
  const handleSubmit = (event) => {
    event.preventDefault();
    invalidFields = {};
    const criteria = {
      origin: origin.state.text,
      destination: destination.state.text,
    };

    if (!airports.includes(criteria.origin)) {
      invalidFields.origin = true;
    }

    if (
      !airports.includes(criteria.destination) ||
      criteria.origin === criteria.destination
    ) {
      invalidFields.destination = true;
    }

    if (Object.keys(invalidFields).length > 0) {
      setFormValid({ isValid: false, ...invalidFields });
      return;
    }

    props.getCriteria(criteria);

    setFormValid({ isValid: true });
  };

  return (
    <Card>
      <Card.Body>
        <Form className="search-form-container" onSubmit={handleSubmit}>
          <Form.Group controlId="formGridOrigin">
            <Typeahead
              id="origin-typeahead-id"
              labelKey="origin"
              options={airports}
              placeholder="Enter Origin"
              ref={(ref) => (origin = ref)}
            />
            {status.origin && (
              <ErrorLabel message="Please enter a valid airport"></ErrorLabel>
            )}
          </Form.Group>

          <Form.Group controlId="formGridDestination">
            <Typeahead
              id="destination-typeahead-id"
              labelKey="destination"
              options={airports}
              placeholder="Enter Destination"
              ref={(ref) => (destination = ref)}
            />
            {status.destination && (
              <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>
            )}
          </Form.Group>
          {isReturn && (
            <Form.Group controlId="formGridDateOfReturn">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                name="dateOfReturn"
                placeholder="yyyy-mm-dd"
                required
              />
              {status.returnDate && (
                <ErrorLabel message="Please enter a valid return date"></ErrorLabel>
              )}
            </Form.Group>
          )}

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchForm;
