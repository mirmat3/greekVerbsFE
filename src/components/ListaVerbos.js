import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";
import { actions as verbosActions } from '../reducers/verbos';

import "./ListaVerbos.css";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import Form from "react-bootstrap/Form";

// const sortArrayByObjectProperty = (array, property) =>
//   array?.sort((a, b) => {
//     if (a[property] > b[property]) {
//       return 1;
//     } else if (b[property] > a[property]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });

function ListaVerbos(props) {
  const { setShowForm, setDataVerb } = props;
  const [searchVerbs, setSearchVerbs] = useState(null);
  const getVerbosSuccess = useSelector((state) => state.verbos.getVerbosSuccess);
 
  
 const handleEditClick = (data) => {
    setShowForm(1);
    setDataVerb(data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!getVerbosSuccess){
      dispatch(verbosActions.getVerbos());
    }else{
      setSearchVerbs(getVerbosSuccess);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getVerbosSuccess]); 

  
  
  const buscaVerbo = (e) => {
    
    e.preventDefault();
  
    const searchText = e.target.value;

    const searchVerbsNew = getVerbosSuccess?.filter((searchVerb) =>
      searchVerb.verbo.toUpperCase().includes(searchText.toUpperCase())  || 
      searchVerb.traduccion.toUpperCase().includes(searchText.toUpperCase())
    );
    if(e.target.value === '') {
      setSearchVerbs(getVerbosSuccess);
    }else{
      setSearchVerbs(searchVerbsNew);
    } 
   
  };

  return (
    <>
      <div  style={{textAlign:'right'}}>
        <span style={{color: '#005099', fontSize: '20px', fontWeight:'bold'}}>{searchVerbs?.length} ρήματα</span>
      </div>
      <div className="col-8">
      <Form.Group className="mb-6" controlId="verbo">
              
        <Form.Control
          type="text"
          name="verbo"
          key="verbo"
          // className="noEditar"
          onChange={(e) => buscaVerbo(e)}
          placeholder="Φράψτε το ρήμα που αναζητάτε"
          size="md"
          autocomplete="off"
          style={{ width: '100%', marginTop: '5px', marginBottom: '5px' }}
        />
      </Form.Group>
   
      </div>
      <div>  
          <Table striped bordered style={{ background: '#def'}}>
            <thead>
              <tr>
              
                <th>Ελληνικά</th>
                <th>Ισπανικά</th>
                <th>Αόριστος</th>
                <th>Απλός Μέλλοντας</th>
                <th>Απλή Υποτακτική</th>
                <th>Παρατατικός</th>
                <th>Φωνή</th>
                <th>Επίπεδο</th>
                {/* <th>Προστακτική</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {searchVerbs && searchVerbs?.map((dataVerbo) => (
                <tr>
                  
                  <td>{dataVerbo.verbo}</td>
                  <td>{dataVerbo.traduccion}</td>
                  <td>{dataVerbo.aoristo}</td>
                  <td>Θα {dataVerbo.ypotaktiki}</td>
                  <td>Να {dataVerbo.ypotaktiki}</td>
                  <td>{dataVerbo.paratatikos}</td>
                  <td>{dataVerbo.tipo === 'E' ? 'Ενεργητική': 'Παθητική'}</td>
                  <td>{dataVerbo.nivel}</td>
                  {/* <td>{dataVerbo.imperativo}</td> */}
                  <td> <Button variant="outline-primary" onClick={() => handleEditClick(dataVerbo)}>
                <CiEdit  size={16} />
              </Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
    </>
  );
}
ListaVerbos.propTypes = {
  setShowForm: PropTypes.func,
  setDataVerb: PropTypes.func,
};  
export default ListaVerbos;
