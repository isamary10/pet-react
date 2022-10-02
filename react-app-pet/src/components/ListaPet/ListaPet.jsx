import React from "react";
import Pet from "../Pet/Pet";
import { useState } from "react";
import { DivLista } from '../../style/styled'
import PetCadastro from "../PetCadastro/PetCadastro";
import imgPet from "../../img/dog.webp"

export default function ListaPet(){

  const [pet, setPet] = useState([{
    nome: 'Bigodinho',
    imagem: imgPet,
    idade: '2',
    raca: 'Viralata',
    tamanho: 'Porte Pequeno',
    dono: 'Agata Ferraz',
    telefone: '1198754-2134',
    obs: 'Cachorro carinhoso que ama brincar'
  }])

  const [nPet, setNPet] = useState({
    nome: '',
    imagem: '',
    idade: '',
    raca: '',
    tamanho: '',
    dono: '',
    telefone: '',
    obs: ''
  })

  const addPet =e=>{
    e.preventDefault()
    setNPet({
      nome: '',
      imagem:'',
      idade: '',
      raca: '',
      tamanho: '',
      dono: '',
      telefone: '',
      obs: ''
    })
    setPet([...pet, nPet])
  }

  const captura= e=>{
    const {value, name} = e.target
    if(name === "nome"){
      setNPet({
        "nome":value,
        "imagem":nPet.imagem,
        "idade":nPet.idade,
        "raca":nPet.raca,
        "tamanho":nPet.tamanho,
        "dono":nPet.dono,
        "telefone":nPet.telefone,
        "obs":nPet.obs
      })
    }else if(name === "imagem"){
      setNPet({
        "nome":nPet.nome,
        "imagem":value,
        "idade":nPet.idade,
        "raca":nPet.raca,
        "tamanho":nPet.tamanho,
        "dono":nPet.dono,
        "telefone":nPet.telefone,
        "obs":nPet.obs
      })
    }else if(name === "idade"){
      setNPet({
        "nome":nPet.nome,
        "imagem":nPet.imagem,
        "idade":value,
        "raca":nPet.raca,
        "tamanho":nPet.tamanho,
        "dono":nPet.dono,
        "telefone":nPet.telefone,
        "obs":nPet.obs,
      })
    }else if(name === "raca"){
      setNPet({
        "nome":nPet.nome,
        "imagem":nPet.imagem,
        "idade":nPet.idade,
        "raca":value,
        "tamanho":nPet.tamanho,
        "dono":nPet.dono,
        "telefone":nPet.telefone,
        "obs":nPet.obs,
      })
    }else if(name === "tamanho"){
      setNPet({
        "nome":nPet.nome,
        "imagem":nPet.imagem,
        "idade":nPet.idade,
        "raca":nPet.raca,
        "tamanho":value,
        "dono":nPet.dono,
        "telefone":nPet.telefone,
        "obs":nPet.obs,
      })
    }else if(name === "dono"){
      setNPet({
        "nome":nPet.nome,
        "imagem":nPet.imagem,
        "idade":nPet.idade,
        "raca":nPet.raca,
        "tamanho":nPet.tamanho,
        "dono":value,
        "telefone":nPet.telefone,
        "obs":nPet.obs,
      })
    }else if(name === "telefone"){
      setNPet({
        "nome":nPet.nome,
        "imagem":nPet.imagem,
        "idade":nPet.idade,
        "raca":nPet.raca,
        "tamanho":nPet.tamanho,
        "dono":nPet.dono,
        "telefone":value,
        "obs":nPet.obs,
      })
    }else if(name === "obs"){
      setNPet({
        "nome":nPet.nome,
        "imagem":nPet.imagem,
        "idade":nPet.idade,
        "raca":nPet.raca,
        "tamanho":nPet.tamanho,
        "dono":nPet.dono,
        "telefone":nPet.telefone,
        "obs":value,
      })
    }
  }

  return(
    <DivLista>
      <PetCadastro addPet={addPet} pet={nPet}
        digit={captura}
      />
      <div className="pet">
        {pet.map((p,i)=>(
          <Pet 
            key={i}
            nome={p.nome}
            imagem={p.imagem}
            idade={p.idade}
            raca={p.raca}
            tamanho={p.tamanho}
            dono={p.dono}
            telefone={p.telefone}
            obs={p.obs}
          />
        ))}
      </div>
    </DivLista>
  )
}
