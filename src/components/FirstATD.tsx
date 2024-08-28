import React from 'react';

const FirstATD: React.FC = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <button onClick={() => console.log('Acción 1')}>CTA 1</button>
      <button onClick={() => console.log('Acción 2')}>CTA 2</button>
    </section>
  );
};

export default FirstATD;