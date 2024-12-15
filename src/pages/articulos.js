import React, { memo, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { compose } from "redux";
// import { actions as articulosActions } from "../reducers/articulos";
import useArticulosDataTable from "../hooks/useArticulosDataTable";
import Header from "../components/header";
import Titulo from "../components/Titulo";
import TableDataTemp from "../components/TableDataTemp";
import {
  tableDataMasc,
  tableDataFem,
  tableDataNeutro,
  tableDataMascIndef,
  tableDataFemIndef,
  tableDataNeutroIndef,
} from "../libraries/articulosLibrary";

export function Articulos() {
  // console.log("articulosData", articulosData);

  // Cabeceras de la tabla de artículos
  const tableDataMascConfig = ["Masc.", "Singular", "Plural"];
  const tableDataFemConfig = ["Femen.", "Singular", "Plural"];
  const tableDataNeutroConfig = ["Neutro", "Singular", "Plural"];
  const tableDataMascIndefConfig = ["Masc.", "Singular"];
  const tableDataFemIndefConfig = ["Femen.", "Singular"];
  const tableDataNeutroIndefConfig = ["Neutro", "Singular"];

  // Contenidos de la tabla de artículos

  // { articulosData } = useArticulosDataTable();
  // console.log({ articulosData });
  // const tableData = articulosData?.map((articulos) => ({
  //   ...articulos,
  // }));

  // const tableDataMasc = tableData.filter(
  //   (articulosMasc) => articulosMasc.genero === "M"
  // );

  return (
    <>
      <Header />
      <Titulo texto="Artículos" subTexto="Άρθρα" />
      <div>
        <div className="col-12 row">
          <div className="col-4 container_tablaData">
            <TableDataTemp
              tableDataConfig={tableDataMascConfig}
              tableDataValues={tableDataMasc}
            />
          </div>
          <div className="col-4 container_tablaData">
            <TableDataTemp
              tableDataConfig={tableDataFemConfig}
              tableDataValues={tableDataFem}
            />
          </div>
          <div className="col-4 container_tablaData">
            <TableDataTemp
              tableDataConfig={tableDataNeutroConfig}
              tableDataValues={tableDataNeutro}
            />
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-4 container_tablaData">
            <TableDataTemp
              tableDataConfig={tableDataMascIndefConfig}
              tableDataValues={tableDataMascIndef}
            />
          </div>
          <div className="col-4 container_tablaData">
            <TableDataTemp
              tableDataConfig={tableDataFemIndefConfig}
              tableDataValues={tableDataFemIndef}
            />
          </div>
          <div className="col-4 container_tablaData">
            <TableDataTemp
              tableDataConfig={tableDataNeutroIndefConfig}
              tableDataValues={tableDataNeutroIndef}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default compose(memo)(Articulos);
