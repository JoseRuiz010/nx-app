import { getAllCharacters } from '@/libs/characters'
import React from 'react'

const Characters = async() => {
    const data= await getAllCharacters()
  return (
    <div>Characters

        <pre>
            {JSON.stringify({data})}
        </pre>
    </div>
  )
}

export default Characters