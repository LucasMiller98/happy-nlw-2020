import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../images/Local.svg'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import './styles/index.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>
            Muitas crianças estão esperando a sua visita :)
          </p>
        </header>

        <footer>
          <strong>Jaboatão dos Guararapes.</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-8.076735,-34.961686]}        
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer 
          url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
        /> */}

        {/* <TileLayer 
          url={
            `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        /> */}

        <TileLayer 
          url={
            `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        />
        
        {/* <TileLayer 
          url={
            `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        /> */}
      </MapContainer>


      <Link to='' className='create-orphanage'> 
        <FiPlus size={32} color='#fff' />       
      </Link>
    </div>
  )
}