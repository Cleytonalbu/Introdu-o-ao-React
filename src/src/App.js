import CaixaTexto from "./componentes/CaixaDeTexto/CaixaTexto";
import Botao from "./componentes/botao/botao";

function App() {
    return ( 
    <div>
       <h1>Nome:</h1>
       <CaixaTexto placeholder="digite seu nome"/>
      
       <h1>Sobrenome</h1>
       <CaixaTexto placeholder="digite seu sobrenome"/>
      
       <h1>Email</h1>
       <CaixaTexto placeholder="digite seu sobrenome"/>
      
       <h1>Senha</h1>
       <CaixaTexto placeholder="digite sua senha" type="password"/>
      
       <Botao texto="Enviar" msg={()=>alert("Dados enviados")}/>
       <Botao texto ="Cancelar" msg={()=>alert("Dados não enviados")} />
    </div>
    
    );
}
export default App;