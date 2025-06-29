import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import { useState } from 'react';
import type { VoteType, Votes } from '../../types/votes.ts';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }));
  };

  
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  
  const totalVotes = votes.good + votes.neutral + votes.bad;
 const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

  const isReset = totalVotes !== 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={isReset}
      />
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveVotes={positiveRate}
      />
    </div>
  );
}

