import React, { memo } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import Table from "react-bootstrap/Table";
import "./TableDataTemp.css";

function TableDataTemp(props) {
  const { tableDataValues, tableDataConfig } = props;
  console.log(tableDataValues);
  const renderTableHead = () => (
    // const normalizedTagList = state.getTagsListSuccess?.map(tag => ({
    //   value: tag.idTag,
    //   label: tag.nombreTag,
    //   description: tag.desTag,
    // }));
    <tr>
      {tableDataConfig.map((item) => (
        <th>{item}</th>
      ))}
    </tr>
  );
  const renderTableBody = () =>
    tableDataValues.map((item) => (
      <tr>
        {item.map((art) => (
          <td>{art}</td>
        ))}
      </tr>
    ));
  return (
    <>
      <Table striped bordered hover>
        <thead>{renderTableHead()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </Table>
    </>
  );
}

TableDataTemp.prototype = {
  tableDataValues: PropTypes.object,
  tableDataConfig: PropTypes.object,
};

export default compose(memo)(TableDataTemp);
