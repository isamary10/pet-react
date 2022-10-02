import React from "react";
import { useEffect } from "react";
import { DivPet } from '../../style/styled'

export default function Pet(props){
  useEffect(() => {
    console.log(props);
  }, []);

    return(
      <DivPet>
        <div className="infoPet">
          <h2>{props.nome}</h2>
        </div>
        <div className="infoPet">
          <img src={props.imagem} alt="Imagem do Pet" />
        </div>
        <div className="infoPet">
          <p> <span>Idade:</span> {props.idade}</p>
        </div>
        <div className="infoPet">
          <p> <span>Raça:</span> {props.raca}</p>
        </div>
        <div className="infoPet">
          <p> <span>Tamanho:</span> {props.tamanho}</p>
        </div>
        <div className="infoPet">
          <p> <span>Nome do dono:</span> {props.dono}</p>
        </div>
        <div className="infoPet">
          <p> <span>Telefone do dono:</span> {props.telefone}</p>
        </div>
        <div className="infoPet">
          <p> <span className="obs">Observações:</span> {props.obs}</p>
        </div>
      </DivPet>
    )

}