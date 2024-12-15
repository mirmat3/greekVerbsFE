import React, { memo, useEffect, useState } from "react";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { actions as verbosActions } from '../reducers/verbos';
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";
import "./game.css";
import { GiCardRandom, GiGreekSphinx, GiLaurelsTrophy  } from "react-icons/gi";
import { RiAlarmWarningFill } from "react-icons/ri";

import { set } from "lodash";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import ListaVerbos from "../components/ListaVerbos";


export function Game(props) {
 const {dataVerbs} = props;
 const [nivelA2, setNivelA2] = useState(false);
 const [nivelB1, setNivelB1] = useState(false);
 const [nivelB2, setNivelB2] = useState(false);
 const [listVerbs, setListVerbs] = useState(dataVerbs);
  const [pregunta, setPregunta] = useState({verbo: '', traduccion: '', pregunta: '', texto: '¿?', respuesta: ''});
  const [respuesta, setRespuesta] = useState();
  const [traduccionVisible, setTraduccionVisible] = useState(false);

  const toggleTranslateVisibility = () => {
    setTraduccionVisible(!traduccionVisible);
  };
  const { values, handleChange, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        verbo: "",
        tipo: "E",
        traduccion: "",
        aoristo: "",
        paratatikos: "",
        ypotaktiki: "",
        // imperativo: "",
      },

    });

  useEffect(() => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [  ]);


 const createPregunta = () => {
  setRespuesta('');
  resetForm();
  const randomPregunta = listVerbs[Math.floor(Math.random() * listVerbs.length)];
  const min = 0;
  const max = 2;
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  const listaPreguntas = ['aoristo', 'paratatikos', 'ypotaktiki'];
  const textoPreguntas = ['Αόριστος', 'Παρατατικός', 'Υποτακτική'];

  const newPregunta = {
    verbo : randomPregunta['verbo'],
    traduccion : randomPregunta['traduccion'],
    pregunta: listaPreguntas[numeroAleatorio],
    texto: textoPreguntas[numeroAleatorio],
    respuesta: randomPregunta[listaPreguntas[numeroAleatorio]],

  }
  setTraduccionVisible(false);
  setPregunta(newPregunta);
  return newPregunta;
 }

 useEffect(() => {
  createPregunta()

 },[])
 const comprobarPregunta = () => {

    const respuesta = values[pregunta.pregunta];
    const correcta = pregunta.respuesta;
    
    if(respuesta.toUpperCase() === correcta.toUpperCase()){
      setRespuesta('S');  
      // createPregunta();
    }
    else{
      setFieldValue('traduccion', pregunta.traduccion);
      setFieldValue(pregunta.pregunta, correcta);
      setRespuesta('L');
    }
}



useEffect(() => {


  // Crear un array de niveles seleccionados
  const nivelesSeleccionados = [];
  if (nivelA2) nivelesSeleccionados.push('A2');
  if (nivelB1) nivelesSeleccionados.push('B1');
  if (nivelB2) nivelesSeleccionados.push('B2');

  // Filtrar los datos con base en los niveles seleccionados
  if (nivelesSeleccionados.length > 0) {
    const dataFiltrada = dataVerbs.filter(verb => nivelesSeleccionados.includes(verb.nivel));
    setListVerbs(dataFiltrada);
  }else{
    setListVerbs(dataVerbs);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [nivelA2, nivelB1, nivelB2]);

  return (
    <>

          <div className="camposForm col-8">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          <Button
            variant={nivelA2 ? "primary" : "outline-primary"  }
            size="md"
            type="button"
            onClick={() => setNivelA2(!nivelA2)}
          >
            A2
          </Button>
          
          <Button
            variant={nivelB1 ? "primary" : "outline-primary"}
            size="md"
            type="button"
            onClick={() => setNivelB1(!nivelB1)}
          >
           B1
          </Button>
          
          <Button
            variant={nivelB2 ? "primary" : "outline-primary"}
            size="md"
            type="button"
            onClick={() => setNivelB2(!nivelB2)}
          >
            B2
          </Button>
        </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
              
               {respuesta === 'L' && <RiAlarmWarningFill style={{color: '#c50145' }} size={50} />}
               {respuesta === 'S' && <GiLaurelsTrophy style={{color: '#ffbf00'}} size={50} />}
           
          </div>

          <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', marginTop: '20px' }}>
              <Button
                variant="primary"
                size="md"
                type="button"
                onClick={() => createPregunta()}
              >
                <GiCardRandom size={35} />
              </Button>
          </div>

            <Form>
              <Form.Group className="mb-6" controlId="verbo">
                <Form.Label>Ελληνικά</Form.Label>
                <Form.Control
                  type="text"
                  name="verbo"
                  key="verbo"
                  className="noEditar"
                  placeholder=""
                  value={pregunta?.verbo}
                  size="md"
                  disabled
                  
                />
              </Form.Group>

              <Form.Group className="mb-6" controlId="traduccion">
                <Form.Label>Ισπανικά</Form.Label>
                <InputGroup>
                  <Form.Control
                    // type={traduccionVisible ? "text" : "password"}
                    type="text"
                    name="traduccion"
                    key="traduccion"
                    size="md"
                    placeholder=""
                    value={traduccionVisible ? pregunta?.traduccion : '**************'}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    autocomplete="off"
                  />
                 <div className="float-right">
                
                <Button
                  variant="outline-primary"
                  size="md"
                  type="button"
                  onClick={() => toggleTranslateVisibility()}
                >
                   {traduccionVisible ? <FaRegEye size={22}/> : <FaRegEyeSlash size={22}/>}
                </Button>
              </div>
          
                </InputGroup>
              </Form.Group>
             
              <Form.Group className="mb-6" controlId={pregunta?.pregunta}>
                <Form.Label>{pregunta?.texto}</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name={pregunta?.pregunta}
                    key={pregunta?.pregunta}
                    size="md"
                    placeholder=""
                    value={values[pregunta?.pregunta]}
                    onChange={handleChange}
                    autocomplete="off"
                  />
              
                </InputGroup>
              </Form.Group>
          
              <div className="float-right">
                
                <Button
                  variant="primary"
                  size="md"
                  type="button"
                  onClick={() => comprobarPregunta()}
                >
                  <GiGreekSphinx size={35}/>
                </Button>
              </div>
            </Form>
          </div>
       
    </>
  );
}

Game.propTypes = {
  dataVerbs: PropTypes.array,
};

export default compose(memo)(Game);
