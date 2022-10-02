import React from "react";
import { DivForm } from '../../style/styled';


export default function PetCadastro(props){
  return(
    <DivForm>
      <form className="" method="post" onSubmit={props.addPet}>
        <p>Formuário Pet</p>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" value={props.pet.nome} onChange={props.digit}/>
        </div>
        <div>
          <label>Imagem do Pet</label>
          <input type="file" name="imagem" value={""} onChange={props.digit} />
        </div>
        <div>
          <label>Idade</label>
          <input type="text" name="idade" value={props.pet.idade} onChange={props.digit}/>
        </div>
        <div>
          <label>Raça</label>
          <input type="text" name="raca" value={props.pet.raca} onChange={props.digit}/>
        </div>
        <div>
          <label>Tamanho</label>
          <input type="text" name="tamanho" value={props.pet.tamanho} onChange={props.digit}/>
        </div>
        <div>
          <label>Nome do Dono</label>
          <input type="text" name="dono" value={props.pet.dono} onChange={props.digit}/>
        </div>
        <div>
          <label>Telefone do Dono</label>
          <input type="text" name="telefone" value={props.pet.telefone} onChange={props.digit}/>
        </div>
        <div>
          <label>Observações</label>
          <textarea cols="30" rows="10" name="obs" value={props.pet.obs} onChange={props.digit}></textarea>
        </div>
        <div className='botao'>
            <button type="submit">Adicionar</button>
        </div>
      </form>
    </DivForm>
  )
}