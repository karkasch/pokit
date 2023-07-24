export interface RoomResponse {
  slug: string;
}

export interface Room {
  slug: string;
  name: string;
  createdDate: Date;
  state: RoomState;
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
