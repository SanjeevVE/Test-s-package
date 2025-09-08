import { Button, Card } from 's-package';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Card title='Demo Card'>
        <p> Hello from my card!</p>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </Card>
    </div>
  );
}

export default App;