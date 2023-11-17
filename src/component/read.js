import React from "react";
import { Table } from "semantic-ui-react";
import { response } from "express";

export default function Read() {
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Last-name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>Bidden</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
