import AppCache from '@/lib/app-cache';
import { Room, RoomState } from '@/lib/rooms/dto';
import PokerTable from './poker-table';
import { cookies } from 'next/headers';
import SetUserName from './set-user-name';
import { useState } from 'react';
import PokerRoom from './poker-room';
import { nanoid } from 'nanoid';
import { Keys } from '@/app/api/keys';
import { getRoom, setRoom } from '@/lib/rooms/room-provider';

export default function Page({ params }: { params: { slug: string } }) {
  let userId = cookies().get(Keys.userCookie)?.value || '';
  let room = getRoom(params.slug);

  if (!room) {
    room = {
      name: 'Test room name',
      slug: 'rrrr',
      createdDate: new Date(),
      state: RoomState.Voting,
      users: [],
    }

    if (userId) {
      room.users.push({ id: userId, name: 'Fake name' });
    }
  }


  // if (userName === null) {
  //   return (
  //     <SetUserName onSetUserName={(name: string) => setUserName(name) } />
  //   )
  // }  toertjenko 

  if (!room) {
    return (
      <div>
        Room is ({params.slug}) underfined
      </div>
    )
  }


  let userName = '';
  if (!userId) {
    userId = nanoid(); // 'dedw';

    room?.users.push({ id: userId, name: '' });
    setRoom(room);
  } else {
    userName = room.users.find(user => user.id === userId)?.name || '';
  }
  
  return (
    <div>
      <PokerRoom room={room} userName={userName} />
    </div>
  )
}
