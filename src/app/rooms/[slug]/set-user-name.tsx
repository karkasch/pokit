'use client';

import { cookies } from "next/headers";
import { ChangeEvent, useState } from "react";

interface Props {
  // onSetUserName: (name: string) => void;
  userName: string;
}


export default function SetUserName({ userName }: Props) {
  const [name, setUserName] = useState('');

  const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    setUserName(event.target.value);
  }

  const saveUserName = () => {
    document.cookie = `ppk_user=${name};path=/`;
    // userName = name;
    window.location.reload();
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
