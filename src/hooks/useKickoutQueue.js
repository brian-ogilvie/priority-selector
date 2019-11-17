import { useState } from 'react';

export default function useKickoutQueue(maxItems) {
  const [queue, setQueue] = useState([]);

  const includes = item => queue.includes(item);

  const remove = item => {
    setQueue(current => current.filter(element => element !== item));
  };

  const enqueue = item => {
    setQueue(current => {
      const startIndex = current.length < maxItems ? 0 : 1;
      return [...current.slice(startIndex), item];
    });
  };

  const enqueueOrRemove = item => {
    if (includes(item)) {
      remove(item);
    } else {
      enqueue(item);
    }
  };

  return { includes, enqueue, remove, enqueueOrRemove };
}