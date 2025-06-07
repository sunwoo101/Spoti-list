import './App.css'

const CLIENT_ID = '56f9ce77e267463a93248740284844e9';
const REDIRECT_LINK = 'https://witty-plant-067c6f61e.6.azurestaticapps.net/callback';
const SCOPE = 'playlist-read-private user-library-read';

function App() {
  const userLogin = () => {
    const URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}'&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_LINK
    )}&scope=${encodeURIComponent(SCOPE)}`;
    window.location.href = URL;
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