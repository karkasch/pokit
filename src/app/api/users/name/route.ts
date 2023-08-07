import { getRoom, setRoomUser } from '@/lib/rooms/room-provider';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { Keys } from '../../keys';
import AppCache from '@/lib/app-cache';
import { SetUserNameResponse } from '@/lib/rooms/dto';

interface SetUserNameRequest {
  roomId: string;
  name: string;
}

export async function POST(req: NextRequest) {
  const body: SetUserNameRequest = await req.json();

  // TODO: validate request

  let setCookie = false;
  // let userId = cookies().get(Keys.userCookie)?.value || '';
  let userId = req.cookies.get(Keys.userCookie)?.value || '';
  console.log('Create user name userId', userId);
  if (!userId) {
    setCookie = true;
    userId = nanoid();
    // cookies().set(Keys.userCookie, userId);
  }

  const room = getRoom(body.roomId);

  console.log('Room <', room);

  if (!room) {
    return NextResponse.json({}, { status: 400 });
  }

  setRoomUser(room, userId, body.name);

  AppCache.set(Keys.room(room.slug), room);

  const response = NextResponse.json<SetUserNameResponse>({
    slug: room.slug,
  }, { status: 200 });

  if (setCookie) {
    response.cookies.set({
      name: Keys.userCookie,
      value: userId,
      httpOnly: true,
      maxAge: 60 * 10
    });
  }

  return response;
};
