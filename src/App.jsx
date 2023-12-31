import { useState} from "react";

import Perfil from "./components/perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";



function App() {
  //const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState ('');

  return (
    <>
    <input type="text" onBlur={(e)=> setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario= {nomeUsuario}/>
      <ReposList nomeUsuario= {nomeUsuario}/>
      </>
    )}
    
    {/*formularioEstaVisivel && (
      <Formulario />
    )    <button onClick ={() => setFormularioEstaVisivel(!formularioEstaVisivel)} >Toggle form</button>
    */}
    </>
  )
}

export default App
