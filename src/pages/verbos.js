import React, { memo, useEffect, useState, render } from "react";
import { compose } from "redux";

import { useFormik } from "formik";
import Header from "../components/header";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";
import "./verbos.css";
import { tableDataVerbos } from "../libraries/verbosLibrary";
import NotasVersion from "../components/NotasVersion";
import ListaVerbos from "../components/ListaVerbos";
import { remove } from "lodash";

export function Verbos() {
  const [dataVerbos, setDataVerbos] = useState(tableDataVerbos);
  const [selectedVerb, setSelectedVerb] = useState(
    dataVerbos[Math.floor(Math.random() * dataVerbos.length)]
  );

  const nuevoVerbo = () => {
    var i = Math.floor(Math.random() * dataVerbos.length);
    setSelectedVerb(dataVerbos[i]);
    resetForm();
    setIconSolucion(iconInicial);
    setFieldValue("verbo", dataVerbos[i].verbo);
  };

  //  solucion ok: fa fa-check classOK
  // solucion error: fa fa-times classError
  const iconInicial = {
    traduccion: "",
    aoristo: "",
    futuro: "",
    ypotaktiki: "",
    imperativo: "",
  };
  const iconVerSolucion = {
    traduccion: "fa fa-check classOK",
    aoristo: "fa fa-check classOK",
    futuro: "fa fa-check classOK",
    ypotaktiki: "fa fa-check classOK",
    imperativo: "",
  };

  const [iconSolucion, setIconSolucion] = useState(iconInicial);
  const { values, handleChange, setFieldValue, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        verbo: "",
        traduccion: "",
        aoristo: "",
        futuro: "",
        ypotaktiki: "",
        imperativo: "",
      },

      onSubmit: (values) => handleSubmitCheckVerb(values),
    });

  const verSolucion = () => {
    setFieldValue("traduccion", selectedVerb?.traduccion);
    setFieldValue("aoristo", selectedVerb?.aoristo);
    setFieldValue("futuro", selectedVerb?.futuro);
    setFieldValue("ypotaktiki", selectedVerb?.ypotaktiki);
    setIconSolucion(iconVerSolucion);
  };
  const handleSubmitCheckVerb = (values) => {
    // comparamos aqui las respuestas
    if (
      selectedVerb.traduccion
        .toUpperCase()
        .includes(values.traduccion?.toUpperCase()) &&
      selectedVerb.aoristo?.toUpperCase() === values.aoristo?.toUpperCase() &&
      selectedVerb.futuro?.toUpperCase() === values.futuro?.toUpperCase() &&
      selectedVerb.ypotaktiki?.toUpperCase() ===
        values.ypotaktiki?.toUpperCase()
    ) {
      const quitaVerbo = remove(dataVerbos, function (solucion) {
        return !(solucion.verbo === selectedVerb.verbo);
      });

      setDataVerbos(quitaVerbo);
    }
    const iconRespuesta = {
      traduccion: selectedVerb.traduccion
        .toUpperCase()
        .includes(values.traduccion?.toUpperCase())
        ? "fa fa-check classOK"
        : "fa fa-times classError",
      aoristo:
        selectedVerb.aoristo?.toUpperCase() === values.aoristo?.toUpperCase()
          ? "fa fa-check classOK"
          : "fa fa-times classError",
      futuro:
        selectedVerb.futuro?.toUpperCase() === values.futuro?.toUpperCase()
          ? "fa fa-check classOK"
          : "fa fa-times classError",
      ypotaktiki:
        selectedVerb.ypotaktiki?.toUpperCase() ===
        values.ypotaktiki?.toUpperCase()
          ? "fa fa-check classOK"
          : "fa fa-times classError",
      imperativo: "",
    };
    setIconSolucion(iconRespuesta);
  };

  // function ListaVerbos() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  //     <>
  //       <Button variant="primary" size="lg" type="button" onClick={handleShow}>
  //         {/* <i className="fa fa-info" /> */}
  //         Ρήματα
  //       </Button>
  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>ΕΛΛΗΝΙΚΆ ΡΉΜΑΤΑ</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <Form.Control
  //             type="text"
  //             name="buscador"
  //             key="buscador"
  //             size="sm"
  //             placeholder="Buscar..."
  //             onChange={buscaVerbo}
  //             value=""
  //             autocomplete="off"
  //           />
  //           <table>
  //             {searchVerbs.map((dataVerbo) => (
  //               <tr>
  //                 <td>{dataVerbo.id}.-</td>
  //                 <td width="50%"> {dataVerbo.verbo}</td>
  //                 <td width="40%"> {dataVerbo.traduccion}</td>
  //               </tr>
  //             ))}
  //           </table>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleClose}>
  //             Close
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <div className="container">
        <div className="col-12 float-left">
          <div className="camposForm col-8">
            <div className="buttonTop float-right">
              <Button
                variant="primary"
                type="button"
                size="lg"
                onClick={nuevoVerbo}
              >
                Νέο ρήμα ({dataVerbos.length})
              </Button>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-6" controlId="verbo">
                <Form.Label>Ελληνικά</Form.Label>
                <Form.Control
                  type="text"
                  name="verbo"
                  key="verbo"
                  className="noEditar"
                  placeholder=""
                  value={selectedVerb?.verbo}
                  size="lg"
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-6" controlId="traduccion">
                <Form.Label>Ισπανικά</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="traduccion"
                    key="traduccion"
                    size="lg"
                    placeholder=""
                    value={values.traduccion}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    autocomplete="off"
                  />

                  <InputGroup.Text className="checkSolucion">
                    <i className={iconSolucion.traduccion} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="aoristo">
                <Form.Label>Αόριστος</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="aoristo"
                    key="aoristo"
                    size="lg"
                    placeholder=""
                    value={values.aoristo}
                    onChange={handleChange}
                    autocomplete="off"
                  />
                  <InputGroup.Text className="checkSolucion">
                    <i className={iconSolucion.aoristo} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="futuro">
                <Form.Label>Απλός Μέλλοντας</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="futuro"
                    key="futuro"
                    size="lg"
                    placeholder=""
                    value={values.futuro}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    autocomplete="off"
                  />
                  <InputGroup.Text className="checkSolucion">
                    <i className={iconSolucion.futuro} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="ypotaktiki">
                <Form.Label>Απλή Υποτακτική</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="ypotaktiki"
                    key="ypotaktiki"
                    size="lg"
                    placeholder=""
                    value={values.ypotaktiki}
                    onChange={handleChange}
                    autocomplete="off"
                  />
                  <InputGroup.Text className="checkSolucion">
                    <i className={iconSolucion.ypotaktiki} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <div className="float-left">
                <ListaVerbos dataVerbos={dataVerbos} />
              </div>
              <div className="float-right">
                <Button
                  variant="light"
                  className="margin-right"
                  type="button"
                  size="lg"
                  onClick={verSolucion}
                  disabled={!selectedVerb}
                >
                  Δεν ξέρω...
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={!selectedVerb}
                >
                  Πάμε!
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <NotasVersion />
    </>
  );
}

Verbos.propTypes = {};

export default compose(memo)(Verbos);
