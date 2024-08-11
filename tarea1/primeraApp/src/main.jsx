import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './Components/Card';



/*
  ejercicio
  Crea un componente llamado "card" que reciba un objeto con
  las siguientes propiedades:
  {
    title: "Titulo de la card",
    description: "Descripción de la card",
    image: "url de la imagen",
  }
  y renderiza dos veces el componente con diferentes propiedades.
  Este componente además debe de tener un boton que diga "Ver más",
  debes usar el componente Button que ya hicimos. Y validar
  con PropTypes.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img className='w-96' src="https://www.freeiconspng.com/uploads/pokemon-png-23.png" alt="Pokemon" />
    <Card
      className='bg-yellow-500'
      title='Pikachu'
      description='Electrico'
      image='https://1.bp.blogspot.com/-vebFgy0dHCk/V1wrmTqMc5I/AAAAAAAAH00/O_9CLTyvoZAsPaz5_35jQjBtCiY_uGJeQCLcB/s1600/Pikatchu_Pokemon.png'
    />
    <Card
      title='Charmander'
      description='Fuego'
      image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1733aa4c-c30e-4ecc-b8d6-80ef83ca0b8e/d5z1g9v-f0698916-3f8d-45d7-b188-19df6b59e4b1.png/v1/fill/w_842,h_949,q_75,strp/004_charmander_by_pklucario-d5z1g9v.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xNzMzYWE0Yy1jMzBlLTRlY2MtYjhkNi04MGVmODNjYTBiOGUvZDV6MWc5di1mMDY5ODkxNi0zZjhkLTQ1ZDctYjE4OC0xOWRmNmI1OWU0YjEucG5nIiwid2lkdGgiOiI8PTg0MiIsImhlaWdodCI6Ijw9OTQ5In1dXX0.hLZ5Qq2ara3h2whvDrdogwHr2pc0wAqtVo1OpIAukes'
    />
  </StrictMode>
);
