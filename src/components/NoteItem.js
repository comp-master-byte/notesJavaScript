import React, {useState} from 'react'
import styled from 'styled-components'
import {AddButton} from '../UI/button/AddButton'
import { motion } from 'framer-motion'
import { Modal } from '../UI/modal/Modal'

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

export const NoteItem = ({note, number, remove,done}) => {

    const [modal, setModal] = useState(false)

    const openForDelete = () => {
        setModal(prev => !prev)
    }

    const doneNote = () => {
        done(note)
        setModal(!modal)
    }


    return (
        <NotesForDoing onClick={() => setModal(!modal)}>
            <NoteIsActual
                as={motion.div}
                whileHover={{boxShadow: '0 0 10px #2196ff'}}
                onClick={openForDelete}
            >   
                <Modal visible={modal} setVisible={setModal}>
                    <div style={{color:'#000', lineHeight:'1.4'}}>
                        <div style={{ fontSize:'24px'}}>Здесь вы можете отметить поле как сделанную заметку</div>
                        <div>Для этого просто нажмите на кнопку добавить в "Сделанные"</div>
                        <AddButton style={{marginTop: '20px'}} onClick={() => setModal(!modal)}>Закрыть окно</AddButton>
                        <AddButton onClick={doneNote} style={{marginLeft: '10px'}} >Сделано</AddButton>
                    </div>
                </Modal>
                
                <div className="note-content">
                    <strong>{number}.</strong>
                    <div style={{display:'flex', flexDirection:'column', marginLeft: '5px'}}>
                        <p>{note.title}</p>
                        <em>{note.body}</em>
                    </div>
                </div>
                <AddButton onClick={()  => remove(note)}>Удалить</AddButton>

            </NoteIsActual>
        </NotesForDoing>
    )
}
