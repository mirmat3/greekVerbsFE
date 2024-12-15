import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";

import "./NotasVersion.css";

function NotasVersion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="float-right" onClick={handleShow}>
        <span className="version">1.0.4</span>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notas de versión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ul>
              <li>
                1.0.4
                <ul>
                  <li>
                    Añadidos verbos nuevos (200 verbos... creo que no me sé
                    tantos verbos ni en español)
                  </li>
                </ul>
              </li>
              <li>
                1.0.3
                <ul>
                  <li>Correcciones en algunos verbos (ο τόνος, vaya)</li>
                </ul>
              </li>
              <li>
                1.0.2
                <ul>
                  <li>No hace dinstinción entre mayúsculas y minúsculas</li>
                  <li>Cambio imagen de fondo</li>
                  <li>
                    Carga inicial del verbo y deshabilitado los botones si no
                    hay verbo inicial
                  </li>
                  <li>Más verbos</li>
                </ul>
              </li>
              <li>
                1.0.1
                <ul>
                  <li>
                    Títulos de tiempos verbales más específicos (απλός
                    μέλλοντας, απλή υποτακτική...)
                  </li>
                  <li>Añadidos verbos nuevos</li>
                  <li>
                    Quitada la publicidad (es lo que tiene las cosas gratis)
                  </li>
                </ul>
              </li>
              <li>
                1.0.0
                <ul>
                  <li>Hacer que funcione algo...</li>
                </ul>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotasVersion;
