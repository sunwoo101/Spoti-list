import './App.css'

function App() {
  const userLogin = () => {
    window.location.href = "https://witty-plant-067c6f61e.6.azurestaticapps.net/callback";
  }

  return (
    <div className="App">
      <h1>🎧 Spoti-List 🎵</h1>
      <p>Personal Spotify playlist data tracker.</p>
      <button onClick={userLogin}> Login Through Spotify</button>
    </div>
  );
}

export default App

