import React from 'react'
import { NoteItem } from './NoteItem';

export const NoteList = ({notes, remove, done}) => {
    return (
        <div>
            {
                notes.length === 0 ? <div style={{marginTop: '10px',textAlign:'center', color: "#fff", lineHeight:'1.6'}}> 
                    <div style={{color: '#fff', fontSize: '24px'}}>У вас нету заметок</div>
                    <p>Нажмите на кнопку "Создать заметку", чтобы создать свою первую заметку</p>
                </div>
                : <p style={{textAlign: 'center', color: '#fff', margin: '20px 0',fontSize:'24px'}}>Ваши актуальные заметки</p>
                    
            }
            {notes.map((note, index) => 
                <NoteItem done={done} remove={remove} number={index + 1} key={note.id} note={note}/>  
            )}
            
        </div>
    )
}
