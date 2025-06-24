import { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<any>(null);

  const analyze = async () => {
    const res = await axios.post('http://localhost:5000/api/analyze', { text });
    setResult(res.data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Text Detector</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        className="w-full p-2 border rounded mb-4 h-40"
      />
      <button
        onClick={analyze}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Analyze
      </button>
      {result && (
        <div className="mt-6 bg-gray-800 p-4 rounded">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
