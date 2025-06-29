import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import { useState } from 'react';
import type { VoteType, Votes } from '../../types/votes.ts';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';

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
  const isReset = totalVotes !== 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={isReset}
      />
    </div>
  );
}

