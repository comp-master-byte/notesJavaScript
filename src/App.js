import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { DoneNotes } from './components/DoneNotes';
import { DoneNotesList } from './components/DoneNotesList';
import { NoteList } from './components/NoteList';
import './style/main.scss'
import { AddButton } from './UI/button/AddButton';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import { Modal } from './UI/modal/Modal';

const Section = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #111, #333);
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
`

const SectionContent = styled.div`
  padding-top: 40px;
`
const NoteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

function App() {

    const [notes, setNotes] = useState([
      {id: 1, title: 'Портфолио', body: 'Создать портфолио программиста'},
      {id: 2, title: 'Вакансии', body: 'Полистать вакансии в поиске работы'},
      {id: 3, title: 'Сервера', body: 'Написать Руслану по поводу серверов'},
    ])

    const [doneNotes, setDoneNotes] = useState([
      // {id: 1, title: 'Сервера', body: 'Написать Руслану по поводу серверов'},
    ])


    const [modal, setModal] = useState(false)

    // Забираем информацию из инпутов и добавляем в новый пост
    const [note, setNote] = useState({title: '', body: ''})

    const switchOnModal = (e) => {
        e.preventDefault()
        setModal(prev => !prev)
    }

    const pTegs = document.querySelectorAll('.pTeg')
    const addNewNote = (e) => {
        e.preventDefault()
        
        if(note.title !== '' && note.body !== '') {
          setNotes([...notes, {...note, id: Date.now()}])
          setNote({title: '', body: ''})
          setModal(!modal)
          
          for (let i = 0; i < pTegs.length; i++) {
            pTegs[i].classList.remove('show')
          }

        } else {
            for (let i = 0; i < pTegs.length; i++) {
              pTegs[i].classList.add('show')
            }
        }
    }

    const removeNote = (note) => {
        setNotes(notes.filter(n => n.id !== note.id))
    }

    const removeDoneNote = (note) => {
      setDoneNotes(doneNotes.filter(n => n.id !== note.id))
  }

  const closePTegs = () => {
    for (let i = 0; i < pTegs.length; i++) {
      pTegs[i].classList.remove('show')
    }
  }

  const changeStateOfNotes = (note) => {
    setDoneNotes([...doneNotes, ...notes.filter(n => n.id === note.id)])
    setNotes(notes.filter(n => n.id !== note.id))
  }

  return (
    <Section onClick={closePTegs}> 
        <Container>
            <SectionContent>
                <form style={{textAlign:'center'}}>
                    <MyButton onClick={switchOnModal}>Создать заметку</MyButton>
                    <hr style={{width: '800px', margin: '0 auto 30px auto',
                                boxShadow:'0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3'}} 
                    />
                    <Modal id="modal-add" visible={modal} setVisible={setModal}>
                        <div style={{marginBottom: '10px'}}>Чтобы создать заметку заполните текущие поля</div>
                        <MyInput 
                            value={note.title}
                            onChange={e => setNote({...note, title: e.target.value})}
                            placeholder='Название заметки'
                        />
                        <p className='pTeg'>Введите тему заметки!!!</p>
                        <MyInput 
                            value={note.body}
                            onChange={e => setNote({...note, body: e.target.value})}
                            placeholder='Описание заметки'
                        />
                        <p className='pTeg'>Введите описание заметки!!!</p>
                        <AddButton onClick={addNewNote} style={{marginTop: '10px'}}>Добавить заметку</AddButton>
                    </Modal>
                </form>
                <NoteContainer>
                    <div>
                          <NoteList done={changeStateOfNotes} remove={removeNote} notes={notes} />
                    </div>
                    <div>
                         <DoneNotesList remove={removeDoneNote} doneNotes={doneNotes}/>
                    </div>
                </NoteContainer> 

            </SectionContent>
        </Container>
    </Section>
  );
}

export default App;