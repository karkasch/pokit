import AppCache from '@/lib/app-cache';
import { Room, RoomState } from '@/lib/rooms/dto';
import PokerTable from './poker-table';
import { cookies } from 'next/headers';
import SetUserName from './set-user-name';
import { useState } from 'react';
import PokerRoom from './poker-room';

export default function Page({ params }: { params: { slug: string } }) {
  let room = AppCache.get<Room>('room_' + params.slug);

  const userName = cookies().get('ppk_user')?.value || '';


  // const [userName, setUserName] = useState(cookies().get('ppk_user')?.value || null);

  // const userName = cookies().get('ppk_user')?.value || null;


  if (!room) {
    room = {
      name: 'Test room name',
      slug: 'rrrr',
      createdDate: new Date(),
      state: RoomState.Voting
    }
  }

  console.log('RO<<', room);

  // if (userName === null) {
  //   return (
  //     <SetUserName onSetUserName={(name: string) => setUserName(name) } />
  //   )
  // }

  if (!room) {
    return (
      <div>
        Room is ({params.slug}) underfined
      </div>
    )
  }
  
  return (
    <div>
      <PokerRoom room={room} userName={userName} />
      {/* <h2>{room.name}</h2>
      <h3>User: {userName}</h3>
      ROOM: {room.name}
      <PokerTable slug={room.slug} /> */}
    </div>
  )
}
