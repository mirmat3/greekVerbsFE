import React, { memo, useEffect, useState, render } from "react";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";


import FormVerb  from "../components/formVerb";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";
import "./verbos.css";
import { GiGreekTemple } from "react-icons/gi";
import { TbAlphabetGreek } from "react-icons/tb";
import { LuGrape } from "react-icons/lu";
import { FaAdversal } from "react-icons/fa";
import Header from "../components/header";
import ListaVerbos from "../components/ListaVerbos";
import {Game} from "../components/game";
import { actions as verbosActions } from '../reducers/verbos';
import ListaAdverbios from "../components/ListaAdverbios";


export function Home() {
 
  const getVerbosSuccess = useSelector((state) => state.verbos.getVerbosSuccess);
  // const getAdverbiosSuccess = useSelector((state) => state.verbos.getAdverbiosSuccess);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!getVerbosSuccess){
      dispatch(verbosActions.getVerbos());
    }
    // if (!getAdverbiosSuccess){
    //   dispatch(verbosActions.getAdverbios());
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

 
  const [showForm, setShowForm] = useState(2);
  const [dataVerb, setDataVerb] = useState(null);
  const [dataAdverb, setDataAdverb] = useState(null);
  
//  const handleEditClick = (data) => {
//     setShowForm(1);
//     setDataVerb(data);
//   };
  return (
    <>
      <Header />
    
      <div className="container dflex">
        <div className="col-12 float-left">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          <Button
            variant={showForm === 1 ? "outline-primary" : "primary"}
            size="md"
            type="button"
            onClick={() => setShowForm(1)}
          >
            <TbAlphabetGreek size={35} />
          </Button>
          
          <Button
            variant={showForm === 2 ? "outline-primary" : "primary"}
            size="md"
            type="button"
            onClick={() => {
              setShowForm(2);
              setDataVerb(null);
            }}            >
            <GiGreekTemple size={35} />
          </Button>
          
          <Button
            variant={showForm === 3 ? "outline-primary" : "primary"}
            size="md"
            type="button"
            onClick={() => setShowForm(3)}
          >
            <LuGrape size={35} />
          </Button>
          {/* <Button
            variant={showForm === 4 ? "outline-primary" : "primary"}
            size="md"
            type="button"
            onClick={() => setShowForm(4)}
          >
            <FaAdversal size={35} />
          </Button> */}
        </div>

          { showForm === 1 &&  <FormVerb setShowForm={setShowForm} dataVerb={dataVerb}/>}
          { showForm === 2 &&  <ListaVerbos dataVerbs = {getVerbosSuccess} setDataVerb={setDataVerb} setShowForm={setShowForm}/>}
          { showForm === 3 &&  <Game dataVerbs = {getVerbosSuccess}/>}
          {/* { showForm === 4 &&  <ListaAdverbios dataAdverbs = {getAdverbiosSuccess} setDataAdverb={setDataAdverb} setShowForm={setShowForm}/>} */}
       

        </div>
      </div>
    </>
  );
}

export default compose(memo)(Home);
