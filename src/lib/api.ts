import { Paths } from "./paths";
import { SetUserNameResponse } from "./rooms/dto";

export const setUserName = async (roomId: string, name: string): Promise<SetUserNameResponse> => {
  const response = await fetch(Paths.users.name, {
    method: 'POST',
    body: JSON.stringify({ roomId, name }),
  });

  return await response.json();
}
