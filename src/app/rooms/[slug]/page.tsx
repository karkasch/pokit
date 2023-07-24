import AppCache from '@/lib/app-cache';
import { Room } from '@/lib/rooms/dto';
import PokerTable from './poker-table';

export default function Page({ params }: { params: { slug: string } }) {
  const room = AppCache.get<Room>('room_' + params.slug);

  console.log('RO<<', room);

  if (!room) {
    return (
      <div>
        Room is ({params.slug}) underfined
      </div>
    )
  }
  
  return (
    <div>
      <h2>{room.name}</h2>
      ROOM: {room.name}
      <PokerTable slug={room.slug} />
    </div>
  )
}
