import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const LeftSide = styled.div`
  background: yellow;
  height: 100%;
  flex: 0.5;
`

const RightSide = styled.div`
  background: red;
  height: 100%;
  flex: 1;
`

const Screen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const PyramidEntry = ({name, id}) => {
  return (
    <div>
      <Link to={`/pyramids/${id}`}>
        <h2>{name}</h2>
      </Link>
    </div>

  )
}

const HomeScreen = () => {
  const [message, setMessage] = useState('waiting for message')
  const [pyramids, setPyramids] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/pyramids')
          .then(response => {
            const pyramidsFromAPI = response.data.pyramids
            setPyramids(pyramidsFromAPI)
            // setMessage(received)
          })
  }, [])

  return (
    <Screen>
      <LeftSide>
        <h2>Welcome to Egypt Mysteries.com!</h2>
        <img style={{
          width: '100px'
        }}
        alt="Pyramid"
        src="pyramid.jpg" />
      </LeftSide>
      <RightSide>
        {
          pyramids.map(p => (
            <PyramidEntry key={p.id} name={p.name} id={p.id}/>
          ))
        }
      </RightSide>
    </Screen>
  )
}

export default HomeScreen