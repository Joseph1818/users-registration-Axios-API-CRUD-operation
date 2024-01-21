import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  //Created useState for first-name and last name to get data.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // function post Data to post Data into the API
  const postData = () => {
    axios.post("https://6554786963cafc694fe68229.mockapi.io/fakeData", {
      firstName,
      lastName,
      checkbox,
    });

    // console.log(firstName);
    // console.log(lastName);
    // console.log(checkbox);
    navigate("/read");
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          {/* Setting the components into a functional components */}
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
