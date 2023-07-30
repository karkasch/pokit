'use client';

// interface Props {
//   slug: string;
// }

export default function PokerTable() {

  const cards = [0, 0.5, 1, 2, 3, 5, 8, 13, 21];

  const onSendVote = (card: number) => {
    console.log('vote', card);
  }


  return (
    <div>
      <div>

      </div>
      <ol>
        { cards.map((card, index) =>
          (<li key={index}><div onClick={() => onSendVote(card)}>{card}</div></li>))
        }
      </ol>
    </div>
  )
}
