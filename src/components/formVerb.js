import React, { memo, useEffect } from "react";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { actions as verbosActions } from '../reducers/verbos';
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";
import "./formVerb.css";
import { FaRegSave } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
// import ListaVerbos from "../components/ListaVerbos";


export function FormVerb(props) {
  const {setShowForm, dataVerb} = props
  const dispatch = useDispatch();

  const addVerboSuccess = useSelector((state) => state.verbos.addVerboSuccess);
  const editVerboSuccess = useSelector((state) => state.verbos.editVerboSuccess);
  const { values, handleChange, setFieldValue, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        verbo: dataVerb?.verbo || "",
        tipo: dataVerb?.tipo || "E",
        traduccion: dataVerb?.traduccion || "",
        aoristo: dataVerb?.aoristo || "",
        paratatikos: dataVerb?.paratatikos || "",
        ypotaktiki: dataVerb?.ypotaktiki || "",
        imperativo: dataVerb?.imperativo || "",
        nivel: dataVerb?.nivel || "A2",
      },

      onSubmit: (values) => handleSubmitForm(values),
    });
  const resetAll = () => {
    dispatch(verbosActions.resetAddVerbo());
    resetForm()
  } 
  useEffect(() => {
    if (addVerboSuccess) {
      // alert("Verbo añadido correctamente");
      dispatch(verbosActions.getVerbos());
      resetAll()
      setShowForm(2)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ addVerboSuccess ]);

  useEffect(() => {
    if (editVerboSuccess) {
      dispatch(verbosActions.getVerbos());
      resetAll()
      setShowForm(2)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ editVerboSuccess ]);
  const handleSubmitForm = (values) => {
      if(dataVerb){
        dispatch(verbosActions.editVerbo({...values, id: dataVerb.id}));
      }else{  
        dispatch(verbosActions.addVerbo(values));
      }  
 
  };

 
const handleSelectChangeTipo = (e) => {
  const selectedOption = e.target.value;
  setFieldValue("tipo", selectedOption);
}

const handleSelectChangeNivel = (e) => {
  const selectedOption = e.target.value;
  setFieldValue("nivel", selectedOption);
}
  return (
    <>
          <div className="camposForm col-8">
           
            <Form onSubmit={handleSubmit}>
            <h3 className="mb-4">ΝΕΟ ΡΗΜΑ<CiEdit size={30}/></h3>
            <Form.Group className="mb-6" controlId="tipoVerbo">
              <Form.Label>Φωνή</Form.Label>
              <Form.Control as="select" name="selectOption" defaultValue={values.tipo} onChange={handleSelectChangeTipo}>
                <option value="E">Ενεργητική</option>
                <option value="P">Παθητική</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-6" controlId="nivelVerbo">
              <Form.Label>Επίπεδο</Form.Label>
              <Form.Control as="select" name="selectOption" defaultValue={values.nivel} onChange={handleSelectChangeNivel}>
                <option value="A2">Α2</option>
                <option value="B1">Β1</option>
                <option value="B2">Β2</option>
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
                  autocomplete="off"
                  
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
              {/* <Form.Group className="mb-6" controlId="futuro">
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
              </Form.Group> */}

              <div className="float-right">
                
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  disabled={values?.verbo.length ===0 ||  addVerboSuccess}
                >
                  <FaRegSave size={35}/>
                </Button>
              </div>
            </Form>
          </div>
       
    </>
  );
}

FormVerb.propTypes = {
  setShowForm: PropTypes.func,
  dataVerb: PropTypes.object,
};

export default compose(memo)(FormVerb);
