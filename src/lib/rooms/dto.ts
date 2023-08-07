export interface RoomResponse {
  slug: string;
}

export interface Room {
  slug: string;
  name: string;
  createdDate: Date;
  state: RoomState;
  // userName: string;
  users: RoomUser[];
}

export interface RoomUser {
  id: string;
  name: string;
}

export interface CreateRoomRequest {
  userName: string;
  roomName: string;
  isValid: boolean;
}

export enum RoomState {
  Undefined,
  Voting,
  Voted
}

export interface SetUserNameResponse {

}