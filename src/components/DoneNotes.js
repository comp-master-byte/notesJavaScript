import React from 'react'
import styled from 'styled-components'
import { AddButton } from '../UI/button/AddButton'
import { motion } from 'framer-motion'

const NotesForDoing = styled.div`
  width: 500px;
  cursor: pointer;
  border-radius: 12px;

`

const NoteIsActual = styled.div`
    color: #2196f3;
    border: 1px solid #2196f3;
    border-radius: 12px;
    padding: 15px 10px;
    margin: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DoneNotes = ({note, remove, number}) => {
    console.log(note)
    return (
        <NotesForDoing>
            <NoteIsActual
                as={motion.div}
                whileHover={{boxShadow: '0 0 10px #2196ff'}}
            >   
            <div className="note-content">
                <strong>{number}.</strong>
                <div style={{display:'flex', flexDirection:'column', marginLeft: '5px'}}>
                    <p>{note.title}</p>
                    <em>{note.body}</em>
                </div>
            </div>
            <AddButton onClick={() => remove(note)}>Удалить</AddButton>

            </NoteIsActual>
        </NotesForDoing>
    )
}
