import React from "react";
import { DivPet } from '../../style/styled'

export default function Pet(props){
    return(
      <DivPet>
        <h2>{props.nome}</h2>
        {/* <img src="{props.foto}" alt="Imagem do Pet" /> */}
        <p>Idade: {props.idade}</p>
        <p>Raça: {props.raca}</p>
        <p>Tamanho: {props.tamanho}</p>
        <p>Nome do dono: {props.dono}</p>
        <p>Telefone do dono: {props.telefone}</p>
        <p>Observações: {props.obs}</p>
      </DivPet>
    )
  
}