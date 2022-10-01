import React from "react";

export default function PetCadastro(){
  return(
    <div>
      <h1>Adicionar Pet</h1>
      <form method="post" >
        <div>
          <label>Nome</label>
          <input type="text" name="nome" />
        </div>
        {/* <div>
          <label>Imagem do Pet</label>
          <input type="file" name="foto" />
        </div> */}
        <div>
          <label>Idade</label>
          <input type="text" name="idade" />
        </div>
        <div>
          <label>Raça</label>
          <input type="text" name="raca" />
        </div>
        <div>
          <label>Tamanho</label>
          <input type="text" name="tamanho" />
        </div>
        <div>
          <label>Nome do Dono</label>
          <input type="text" name="dono" />
        </div>
        <div>
          <label>Telefone do Dono</label>
          <input type="text" name="telefone" />
        </div>
        <div>
          <label>Observações</label>
          <textarea cols="30" rows="10" name="obs" ></textarea>
        </div>
        <div className='botao'>
            <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  )
}