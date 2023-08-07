import { Keys } from "@/app/api/keys";
import AppCache from "../app-cache";
import { Room } from "./dto"

export const setRoom = (room: Room): void => AppCache.set(Keys.room(room.slug), room);

export const getRoom = (id: string): Room | undefined => AppCache.get<Room>(Keys.room(id));

export const setRoomUser = (room: Room, userId: string, userName: string) => {

}