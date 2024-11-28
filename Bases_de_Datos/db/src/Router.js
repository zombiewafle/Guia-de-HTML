import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './frontend/login.js';
import Home from './frontend/home.js';
import OAuthCallback from './frontend/components/oauth.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/auth/google/callback" element={<OAuthCallback />} /> {}
            </Routes>
        </Router>
    );
}

export default App;
