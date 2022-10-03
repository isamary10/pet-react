import styled from "styled-components";

export const DivLista = styled.div`
.pet{
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 3vw;
}
`
export const DivPet = styled.div`
background-color: #e2e2e2;
border-radius: 10px;
width: 30vw;
height: 55vw;
margin: auto;
margin-bottom: 2vw;
  box-shadow: 2px 3px 5px rgba(50, 50, 50, 0.77);
img{
  width: 26vw;
  height: 25vw;
  border-radius: 10px;
}
.infoPet{
  padding: 0 2vw;
  padding-bottom; 2vw;
}
h2{
  text-align: center;
}
span{
  font-weight: bold;
}
.obs{
  word-wrap: normal|break-word|initial|inherit;
}
`

export const DivForm = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  form {
    padding: 0 2rem;
    padding-bottom: 1rem;
    background-color: #e2e2e2;
    border-radius: 10px;
    p{
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 0.1rem;
    }
    input {
      &[type="text"] {
        width: 100%;
        height: 2rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 5px;
        filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      }
      &[type="file"] {
        padding: 1rem;
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
      }
    }
    textarea {
      width: 92%;
      padding: 1rem;
      height: 5rem;
      resize: none;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
    }
    textarea:focus, input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
    button{
      width: 10vw;
      height: 3vw;
      border-radius: 5px;
      border: none;
      background-color: #ac9ba4;
      font-weight: 550;
      text-align: center;
      color: #ffff;
      cursor: pointer;
    }
    button:hover{
      background-color: #6c6074;
    }
    .botao{
      padding-top: 0.5rem;
      text-align: center;
    }
  }
`