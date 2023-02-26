import './css/App.css';
import { Counter } from './components/Counter';

export const App = () => {
	return (
    <main className="container">
      <h1>
        <span className="react">React</span> Click Counter
      </h1>
      <Counter />
    </main>
  )
}
