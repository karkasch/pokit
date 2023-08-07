'use client';

import { setUserName } from '@/lib/api';
import { cookies } from 'next/headers';
import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
  // onSetUserName: (name: string) => void;
  roomId: string;
  userName: string;
}


export default function SetUserName({ roomId, userName }: Props) {
  const [name, setName] = useState('');
  const [newName, setNewName ] = useState('');

  useEffect(() => {
    setUserName(roomId, newName).then(response => {
      console.log('setUserName', response);
      userName = newName;
    });
  }, [newName]);

  const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    setName(event.target.value);
  }

  const saveUserName = () => {
    setNewName(name);
    // window.location.reload();
  }

  if (userName) {
    return (
      <div>
        User: {userName}
      </div>
    )
  }

  return (
    <div>

      Your name: <input type="text" id="name" value={name} onChange={onUserNameChange} />
      <button onClick={saveUserName}>Save</button>
    </div>
  );
}
