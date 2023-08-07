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

  return (
    <div>
      <h2>{room.slug}</h2>

      <SetUserName roomId={room.slug} userName={userName} />
      ROOM 
      <PokerTable />
    </div>
  )
}
