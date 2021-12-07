import React from 'react'
import { DoneNotes } from './DoneNotes'

export const DoneNotesList = ({doneNotes, remove}) => {
    return (
        <div>
            <p style={{textAlign: 'center', color: '#fff', margin: '20px 0',fontSize:'24px'}}>Ваши выполненные задачи</p>
            {doneNotes.map((note, index) => 
                <DoneNotes number={index + 1} remove={remove} note={note}/>
            )}
        </div>
    )
}
