import React from 'react';
import useKickoutQueue from '../hooks/useKickoutQueue';
import UISwitch from './UISwitch';

export default function App() {
  const { includes: queueIncludes, enqueueOrRemove } = useKickoutQueue(2);

  const handleChange = ({ target }) => {
    enqueueOrRemove(target.name);
  };
  return (
    <div>
      <h1>Engineering Priority Selector</h1>
      <UISwitch name="good" label="Good" active={queueIncludes('good')} onChange={handleChange} color="green" />
      <UISwitch name="fast" label="Fast" active={queueIncludes('fast')} onChange={handleChange} color="blue" />
      <UISwitch name="cheap" label="Cheap" active={queueIncludes('cheap')} onChange={handleChange} color="red" />      
    </div>
  );
}
