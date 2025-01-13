import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutAlbum from './components/aboutAlbum'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
            <h1 class="main-title">Thriller</h1>
            <p class="main-paragraph">O album mais vendido do mundo</p>
        </header>
      <div class="about-container">
      <AboutAlbum /> 
      </div>      
      </div>
      <div class="quotes-container">
            <blockquote>
                "A estrela do álbum sempre será a música. Sempre acreditei que as músicas falam por si mesmas, e com Thriller, queríamos criar algo que fosse mágico, que nunca perdesse seu brilho com o tempo."
            </blockquote>
            <p>Michael Jackson</p>
      </div>
      <div class="curiosities-container">
                <h2>Curiosidades do Album:</h2>
                <ul>
                    <li>Maior álbum de todos os tempos</li>
                    <p>
                        Com mais de 70 milhões de cópias vendidas globalmente, Thriller é o álbum mais vendido da história.
                        Ele chegou ao topo das paradas em mais de 10 países e ficou na posição número 1 da Billboard 200 por 37 semanas consecutivas.
                    </p>
                    <li>"Thriller" quase teve outro nome</li>
                    <p>Originalmente, o álbum seria chamado "Starlight", e a faixa-título teria o mesmo nome. Foi Rod Temperton,
                       compositor da música "Thriller", quem sugeriu a mudança para o título icônico que conhecemos hoje.</p>
                    <li>"Billie Jean" fez história na TV</li>
                    <p>Michael Jackson quebrou barreiras raciais ao se tornar o primeiro artista negro a ter um videoclipe em alta rotação na MTV com "Billie Jean". 
                       Isso abriu portas para outros artistas negros na indústria musical.</p>
                    <li>O clipe de "Thriller" quase não aconteceu</li>
                    <p>O vídeo icônico de "Thriller" foi feito com um orçamento de 500 mil dólares, algo inédito para a época.
                       Michael teve que convencer a gravadora, que inicialmente achou o custo muito alto, e parte do financiamento veio de uma parceria com a Showtime e a MTV.</p>
                    <li>O rugido do tigre</li>
                    <p>No final da faixa "Thriller", há um som de um rugido que muitos acreditam ser de um tigre. Na verdade,
                       é um efeito sonoro produzido no estúdio para dar um toque assustador e misterioso à música.</p>
                </ul>
            </div>
        <div class="curiosities-container">
                <br />
                <blockquote>
                    "Lift your head up high and scream out to the world:<br />
                     I know I am someone, and let the truth unfurl."<br />
                </blockquote>
                <p>Michael Jackson - Wanna Be Startin' Somethin</p>
        </div>
        <Login />
    </>
  )
}

export default App
