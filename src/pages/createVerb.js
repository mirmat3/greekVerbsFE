import React, { memo, useEffect, useState, render } from "react";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { actions as verbosActions } from '../reducers/verbos';
import { useFormik } from "formik";
import Header from "../components/header";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";
import "./verbos.css";
import NotasVersion from "../components/NotasVersion";
import { GiGreekTemple } from "react-icons/gi";
import ListaVerbos from "../components/ListaVerbos";


export function FormVerb() {
  const dispatch = useDispatch();

  const addVerboSuccess = useSelector((state) => state.verbos.addVerboSuccess);
  const getVerbosSuccess = useSelector((state) => state.verbos.getVerbosSuccess);
  const { values, handleChange, setFieldValue, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        verbo: "",
        tipo: "E",
        traduccion: "",
        aoristo: "",
        paratatikos: "",
        ypotaktiki: "",
        imperativo: "",
      },

      onSubmit: (values) => handleSubmitForm(values),
    });
  const resetAll = () => {
    dispatch(verbosActions.resetAddVerbo());
    resetForm()
  } 
  useEffect(() => {
    if (addVerboSuccess) {
      alert("Verbo añadido correctamente");
      resetAll()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ addVerboSuccess ]);

  const handleSubmitForm = (values) => {
    // comparamos aqui las respuestas

      dispatch(verbosActions.addVerbo(values));
 
  };

 
const handleSelectChange = (e) => {
  const selectedOption = e.target.value;
  setFieldValue("tipo", selectedOption);
}
  return (
    <>
      <Header />
      <div className="container">
        <div className="col-12 float-left">
          <div className="camposForm col-8">
           
            <Form onSubmit={handleSubmit}>
            <h3 className="mb-4">ΝΕΟ ΡΗΜΑ</h3>
            <Form.Group className="mb-6" controlId="tipoVerbo">
              <Form.Label>Φωνή</Form.Label>
              <Form.Control as="select" name="selectOption" onChange={handleSelectChange}>
                <option value="E">Ενεργητική</option>
                <option value="P">Παθητική</option>
              </Form.Control>
            </Form.Group>
              <Form.Group className="mb-6" controlId="verbo">
                <Form.Label>Ελληνικά</Form.Label>
                <Form.Control
                  type="text"
                  name="verbo"
                  key="verbo"
                  // className="noEditar"
                   onChange={handleChange}
                    setFieldValue={setFieldValue}
                  placeholder=""
                  value={values.verbo}
                  size="md"
                  
                />
              </Form.Group>

              <Form.Group className="mb-6" controlId="traduccion">
                <Form.Label>Ισπανικά</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="traduccion"
                    key="traduccion"
                    size="md"
                    placeholder=""
                    value={values.traduccion}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    autocomplete="off"
                  />


                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="aoristo">
                <Form.Label>Αόριστος</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="aoristo"
                    key="aoristo"
                    size="md"
                    placeholder=""
                    value={values.aoristo}
                    onChange={handleChange}
                    autocomplete="off"
                  />
              
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="ypotaktiki">
                <Form.Label>Απλή Υποτακτική / Απλός Μέλλοντας</Form.Label>
                <InputGroup>
                <InputGroup.Text style={{marginLeft: '10px'}}>να, θα</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="ypotaktiki"
                    key="ypotaktiki"
                    size="md"
                    placeholder=""
                    value={values.ypotaktiki}
                    onChange={handleChange}
                    autocomplete="off"
                    style={{marginLeft: '2px'}}
                  />
                  
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="futuro">
                <Form.Label>Παρατατικός</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="paratatikos"
                    key="paratatikos"
                    size="md"
                    placeholder=""
                    value={values.paratatikos}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    autocomplete="off"
                  />
              
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-6" controlId="futuro">
                <Form.Label>Προστακτική</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="imperativo"
                    key="imperativo"
                    size="md"
                    placeholder=""
                    value={values.imperativo}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    autocomplete="off"
                  />
              
                </InputGroup>
              </Form.Group>
              <div className="float-left">
                <ListaVerbos dataVerbos={getVerbosSuccess} />
              </div>
              <div className="float-right">
                
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                >
                  <GiGreekTemple size={35}/>
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

FormVerb.propTypes = {};

export default compose(memo)(FormVerb);
