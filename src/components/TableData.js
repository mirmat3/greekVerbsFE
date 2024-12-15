import React, { memo } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import Table from "react-bootstrap/Table";
import "./TableData.css";

function TableData(props) {
  const { tableDataValues } = props;



  return (
    <>
      <div className="col-12 row">
        <div className="col-4 container_tablaData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Masc.</th>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativo</td>
                <td>ο</td>
                <td>οι</td>
              </tr>
              <tr>
                <td>Acusativo</td>
                <td>τον</td>
                <td>τους</td>
              </tr>
              <tr>
                <td>Genitivo</td>
                <td>του</td>
                <td>των</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-4 container_tablaData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Femen.</th>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativo</td>
                <td>η</td>
                <td>οι</td>
              </tr>
              <tr>
                <td>Acusativo</td>
                <td>την</td>
                <td>της</td>
              </tr>
              <tr>
                <td>Genitivo</td>
                <td>τις</td>
                <td>των</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-4 container_tablaData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Neutro</th>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativo</td>
                <td>το</td>
                <td>τα</td>
              </tr>
              <tr>
                <td>Acusativo</td>
                <td>το</td>
                <td>τα</td>
              </tr>
              <tr>
                <td>Genitivo</td>
                <td>του</td>
                <td>των</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="col-8 row">
        <div className="col-4 container_tablaData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Masc.</th>
                <th>Indefinido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativo</td>
                <td>ένας</td>
              </tr>
              <tr>
                <td>Acusativo</td>
                <td>έναν</td>
              </tr>
              <tr>
                <td>Genitivo</td>
                <td>ένος</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-4 container_tablaData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Femen.</th>
                <th>Indefinido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativo</td>
                <td>μία</td>
              </tr>
              <tr>
                <td>Acusativo</td>
                <td>μία</td>
              </tr>
              <tr>
                <td>Genitivo</td>
                <td>μίας</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-4 container_tablaData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Neutro</th>
                <th>Indefinido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativo</td>
                <td>ένα</td>
              </tr>
              <tr>
                <td>Acusativo</td>
                <td>ένα</td>
              </tr>
              <tr>
                <td>Genitivo</td>
                <td>ένος</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

TableData.prototype = {
  tableDataValues: PropTypes.object,
};

export default compose(memo)(TableData);
