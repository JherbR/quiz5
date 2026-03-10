import { useState } from "react"

function HomeScreen() {
  const [prompt, setPrompt] = useState("")

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center',padding: '20px', alignItems: 'center', marginTop: '20vh'}}>
      <h1 style={{ fontSize: '4vw', fontFamily: 'times new roman'}}>GENRE FINDER</h1>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <p style={{ fontSize: '1.5vw', fontFamily: 'times new roman'}}>Find a movie based on your interests!</p>
    </div>
    <div>
        <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your preferred movie genre or any specific criteria here"
            style={{ width: '60%',fontSize: '1.5vw', padding: '10px', borderRadius: '100px', background: '#4e4e4e', position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}
        />
    </div>
    </>
  )
}

export default HomeScreen
