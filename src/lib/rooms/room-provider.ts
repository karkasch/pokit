import { Keys } from "@/app/api/keys";
import AppCache from "../app-cache";
import { Room } from "./dto"
import { use } from "react";

export const setRoom = (room: Room): void => AppCache.set(Keys.room(room.slug), room);

export const getRoom = (id: string): Room | undefined => AppCache.get<Room>(Keys.room(id));

export const setRoomUser = (room: Room, userId: string, userName: string) => {
  const user = room.users.find(user => user.id === userId);
  if (user) {
    user.name = userName;
  } else {
    room.users.push({ id: userId, name: userName});
  }

  setRoom(room);
}
