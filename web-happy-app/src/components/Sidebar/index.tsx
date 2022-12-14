import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from '../../images/Local.svg'
import { useNavigate } from 'react-router-dom'
import './styles/index.css'

export function Sidebar() {
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/app')
  
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={handleNavigate}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}