import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
export default function Read() {
  //Delete
  const onDelete = (id) => {
    axios.delete(`https://6554786963cafc694fe68229.mockapi.io/fakeData/${id}`);
  };
  //Read Operation
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6554786963cafc694fe68229.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const updateHandle = (e) => {
    
  };

  // .// Using local storage to store data into the browser by callin the setData Function.
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>First-name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Link to="/update">
                      <Table.Cell>
                        <Button onClick={() => setData(data)}>Update</Button>
                      </Table.Cell>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
