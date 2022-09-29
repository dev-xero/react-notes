import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddNotesBlock from './components/AddNotesBlock';
import AddNewNote from './components/AddNewNote';
import PinnedNotes from './components/PinnedNotes';
import './icons/css/boxicons.css';

function App() {
  const LOCAL_STORAGE_KEY = 'react-notes-list';
  const [isShowing, setIsShowing] = useState(false);
  const [noteList, setNoteList] = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    : useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(noteList));
  }, [noteList]);

  const handleNotesShow = () => setIsShowing(true);
  const overlayClick = () => setIsShowing(false);
  const handleUpdateNotes = (title, description, priority, isPinned) => {
    if (title.trim() && title !== '') {
      setNoteList([
        ...noteList,
        {
          id: new Date().getTime().toString().slice(4, -1),
          title: title,
          description: description ? description : 'No description',
          isPinned: isPinned,
          priority: priority,
          date: new Date().toDateString(),
        },
      ]);
    }
  };

  return (
    <div id="notes-app">
      <Header></Header>
      <div className="app-contents">
        <div className="inner-width">
          <AddNotesBlock handleNotesShow={handleNotesShow}></AddNotesBlock>
          <AddNewNote
            isShowing={isShowing}
            overlayClick={overlayClick}
            handleUpdateNotes={(title, description, priority, isPinned) =>
              handleUpdateNotes(title, description, priority, isPinned)
            }
          ></AddNewNote>
          <PinnedNotes
            pinnedNotes={noteList.filter(({ isPinned }) => isPinned === true)}
          ></PinnedNotes>
        </div>
      </div>
    </div>
  );
}

export default App;
