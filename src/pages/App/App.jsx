import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import NotesHistoryPage from '../ONotesHistoryPage/NotesHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes" element={<NotesHistoryPage notes={notes} user={user} setNotes={setNotes}/>} />
              <Route path="/notes/new" element={<NewNotesPage setNotes={setNotes} notes={notes} user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
