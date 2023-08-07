'use client'
import { Paths } from '@/lib/paths';
import { CreateRoomRequest, RoomResponse } from '@/lib/rooms/dto';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const CreateRoom = () => {
  const router = useRouter();

  const [form, setForm] = useState<CreateRoomRequest>({
    userName: '',
    roomName: '',
    isValid: false,
  });

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newForm = {
      ...form,
      [event.target.id]: event.target.value,
    };

    newForm.isValid = newForm.userName.length > 1 && newForm.roomName.length > 1;

    setForm(newForm);
  }

  const submitForm = async () => {
    const response = await fetch(Paths.rooms.index, {
      method: 'POST',
      body: JSON.stringify(form)
    });

    const result: RoomResponse = await response.json();
    console.log('RESS', result);

    if (result.slug) {
      await router.push('/rooms/' + result.slug);
    }
  }
  
  return (
    <div>
      <h2>Create Room</h2>
      
      <div>
        Your name: <br />
        <input type="text" placeholder="Your name..." id="userName" value={form.userName} onChange={onFormChange} />
      </div>
      <div>
        Room name: <br />
        <input type="text" placeholder="Room name..." id="roomName" value={form.roomName} onChange={onFormChange} />
      </div>
      <div>
        <button disabled={!form.isValid} onClick={submitForm}>Create Room</button>
      </div>
    </div>
  )
}

export default CreateRoom;
