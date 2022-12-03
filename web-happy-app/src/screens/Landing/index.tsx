import './styles/landing.css'
import logoImg from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi' 

export function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o muno</h1>
          <p>
            Visite orfanatos e mude o dia de muitas crianças.
          </p>

          <div className="location">
            <strong>Jaboatão dos Guararapes.</strong>
            <span>Pernambuco</span>
          </div>

          <Link to='/app' className='enter-app'>
            < FiArrowRight size={26} color='rgba(0, 0, 0, .6)' />
          </Link>         
        </main>
      </div>
    </div>
  )
}