import AppCache from '@/lib/app-cache';
import { CreateRoomRequest, Room, RoomResponse, RoomState } from '@/lib/rooms/dto';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return NextResponse.json({ a: 123}, { status: 200 });
};

export async function POST(req: NextRequest) {
  const body: CreateRoomRequest = await req.json();

  console.log('Create room: ', body);

  const room: Room = {
    slug: nanoid(),
    name: body.roomName,
    createdDate: new Date(),
    state: RoomState.Voting
  };

  AppCache.set('room_' + room.slug, room);

  cookies().set('ppk_user', body.userName);

  return NextResponse.json<RoomResponse>({
    slug: room.slug,
  }, { status: 200 });
};
