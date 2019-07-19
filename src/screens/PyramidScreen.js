import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PyramidScreen = ({ match }) => {
  const [mysteries, setMysteries] = useState([])
  
  useEffect(() => {

    axios.get(`http://localhost:3001/pyramids/${match.params.id}`)
          .then(response => {
            const mysteriesFromAPI = response.data.mysteries
            setMysteries(mysteriesFromAPI)
            // setMessage(received)
          })
  }, [])

  return (
    <div>
      A screen for Pyramid {match.params.id}
      {
        mysteries.map(m => (
        <div key={m.id}>
          <p>{m.name}</p>
          <p>{m.description}</p>
        </div>
        ))
      }
    </div>
  )
}

export default PyramidScreen