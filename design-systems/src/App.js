import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
function App() {

  const usuarios = [{profissao: "fullstack-developer" , nome: "miguel" , seguidores: "100"}, {profissao: "frontend-developer", nome: "marcelo", seguidores: "1000"}] 

  // - Crie um estado
  // e coloque seu array como valor inicial (não se preocupe em utilizar a função de atualização)
  // - Mapeie o estado, retornando o Card passando as props necessárias para personalização
const [estado, setEstado] = useState(usuarios)


  return (
    <ChakraProvider>
      <Button>Button</Button>
   
   {estado.map((usuario)=>{
    return <Card nome={usuario.nome}
    profissao={usuario.profissao}
    seguidores={usuario.seguidores}></Card>
   })}
   
    </ChakraProvider>
  );
}

export default App;
