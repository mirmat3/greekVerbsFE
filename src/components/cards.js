import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import 'font-awesome/css/font-awesome.min.css';

import './cards.css'

function CardMenu(props){
    const { titulo,subtitulo,icono,link } = props;
    return(
        <>
            <Card className="cardMenu">
                   
            <Card.Link href={link}>
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {subtitulo}
                    </Card.Subtitle>
                    <i className={icono} />
                    </Card.Body>
                </Card.Link>
            </Card>
        </>
    )
}

CardMenu.propTypes = {
    titulo: PropTypes.string,
    subtitulo: PropTypes.string,
    icono: PropTypes.string,
    link: PropTypes.string,
};

export default CardMenu;