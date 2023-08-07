import AppCache from '@/lib/app-cache';
import { CreateRoomRequest, Room, RoomResponse, RoomState } from '@/lib/rooms/dto';
import { setRoom } from '@/lib/rooms/room-provider';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'
import { Keys } from '../keys';

export async function GET(req: NextRequest) {
  return NextResponse.json({ a: 123}, { status: 200 });
};

export async function POST(req: NextRequest) {
  const body: CreateRoomRequest = await req.json();

  console.log('Create room: ', body);

  let setCookie = false;
  let userId = cookies().get(Keys.userCookie)?.value || '';
  if (!userId) {
    setCookie = true;
    userId = nanoid();
    cookies().set(Keys.userCookie, userId);
  }

  const room: Room = {
    slug: nanoid(),
    name: body.roomName,
    createdDate: new Date(),
    state: RoomState.Voting,
    users: [{ id: userId, name: body.userName }],
  };

  setRoom(room);

  const response = NextResponse.json<RoomResponse>({
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
