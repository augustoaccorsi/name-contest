import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <h2>Hello JSX</h2>
            {Math.random()}
        </div>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
