import {useState} from 'react';
import './App.css'
import logoImg from './assets/logo.png';
function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'aqui é uma frase.',
        'aqui é outra frase.',
        'aqui é uma frase.',
        'aqui é outra frase.',
        'aqui é uma frase.',
        'aqui é outra frase.',
        'aqui é uma frase.'
      ]
    },
    {
      id: 2,
      nome: "Bem estar",
      frases: [
        'aqui é outra frase.',
        'aqui é uma frase.',
        'aqui é outra frase.',
        'aqui é uma frase.',
        'aqui é outra frase.',
        'aqui é uma frase.',
        'aqui é outra frase.'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
   <div className='container'>
    <img src={logoImg} alt="Frases" className='logo'/>

    <h2 className='title'>Categorias</h2>
    <section className='category-area'>
      {allFrases.map( (item, index) => (
        <button 
          key={item.id}
          className='category-button'
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}
          onClick={ () => handleSwitchCategory(index) }
        >
            {item.nome}
        </button>
      ) )}
    </section>

    <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

    {textoFrase !== '' && <h3 className='textoFrase'>{textoFrase}</h3>
}
   </div>
  )
}

export default App
