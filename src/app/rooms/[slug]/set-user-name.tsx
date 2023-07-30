'use client';

import { cookies } from "next/headers";
import { ChangeEvent, useState } from "react";

interface Props {
  // onSetUserName: (name: string) => void;
  userName: string;
}


export default function SetUserName({ userName }: Props) {
  const [name, setUserName] = useState(userName);

  const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    setUserName(event.target.value);
  }

  if (name) {
    return (
      <div>
        User: {name}
      </div>
    )
  }

  return (
    <div>

      Your name: <input type="text" id="name" value={name} onChange={onUserNameChange} />
      <button>Save</button>
    </div>
  );
}
