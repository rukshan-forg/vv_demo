import {Link} from 'react-router-dom';


function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-error">404</h1>
            <p className="text-2xl mt-4 text-font-PARAGRAPH">Oops! The page you’re looking for does’t exist.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-button text-font-BUTTON rounded hover:bg-blue-700">
                Go Back to Home
            </Link>
        </div>
    );
}

export default App;
