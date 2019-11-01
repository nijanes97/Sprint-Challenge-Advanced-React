import React from 'react'
import Styled from 'styled-components'

const PlayerCard = (props) => {
        return(
            <div className='card-div'>
                <h3>{props.player.name}</h3>
                <h4>Country: {props.player.country}</h4>
            </div>
        )
}

export default PlayerCard