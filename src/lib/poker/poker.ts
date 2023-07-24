import { Vote, VoteResponse } from "./dto"

const sendVoteAsync = async (vote: Vote): Promise<VoteResponse> => {
  const response = await fetch('/api/poker/vote', {
    method: 'POST',
    body: JSON.stringify(vote),
  });

  return await response.json();
}
