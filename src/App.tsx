import React, { useState } from 'react';

export function App() {
  const [connected, setConnected] = useState(false);
  const [pong, setPong] = useState('');
  const [counter, setCounter] = useState(0);

  const connect = async () => {
    setPong(await wheel.ping());
    setConnected(true);
  };

  const renderConnectButton = () => {
    if (!connected) {
      return (
        <div>
          <p>Connect ledger and unlock, and press below button</p>
          <button onClick={connect}>connect</button>
        </div>
      );
    }
  };

  wheel.counter((_event, value) => setCounter(value));

  return (
    <>
      {renderConnectButton()}
      <p>Hello {pong}</p>
      <p>Counter {counter}</p>
    </>
  );
}
