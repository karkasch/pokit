'use client';

import { Room } from '@/lib/rooms/dto';
import { cookies } from 'next/headers';
import { useState } from 'react';
import SetUserName from './set-user-name';
import PokerTable from './poker-table';

interface Props {
  room: Room;
  userName: string;
}

export default function PokerRoom({ room, userName }: Props) {

  // const [userName, setUserName] = useState(cookies().get('ppk_user')?.value || null);
  

  return (
    <div>
      <h2>{room.slug}</h2>

      <SetUserName userName={userName} />
      ROOM 
      <PokerTable />
    </div>
  )
}
