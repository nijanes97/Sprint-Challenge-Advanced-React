import React from 'react'
import PlayerCard from './PlayerCard'
import Styled from 'styled-components'

const PlayerList = (props) => {

    return(
        <div className='list-div'>
            {props.players.map(player => ( 
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>

    )
}

export default PlayerList;