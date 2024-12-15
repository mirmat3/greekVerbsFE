import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as articulosActions } from "../reducers/articulos";

function useArticulosDataTable() {
  const dispatch = useDispatch();
  const state = useSelector((globalState) => globalState.articulos);
  console.log("state.getArticulosSuccess", state.getArticulosSuccess);
  useEffect(() => {
    if (!state.getArticulosSuccess) {
      dispatch(articulosActions.getArticulos());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.getArticulosSuccess) {
    // const { articulo, nomCasoES, genero, numero } = state.getArticulosSuccess;
    const articulosSuccess = state.getArticulosSuccess;
    const articulosData = articulosSuccess.map((item) => ({
      caso: item.nomCasoES,
      singular: item.articuloSingular,
      plural: item.articuloPlural,
    }));
    return {
      // articulosData: state.getArticulosSuccess,
      articulosData,
    };
  }
  return { articulosData: null };
}

export default useArticulosDataTable;
