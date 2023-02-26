import { useState } from 'react';
import '../css/Counter.css';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const changeCount = (evt) => {
		evt.target.className === 'increase' ? setCount(count + 1) : null;
		evt.target.className === 'reset' ? setCount(0) : null;
		evt.target.className === 'decrease' ? setCount(count - 1) : null;
	}

	return (
		<article className='counterContainer'>
			<span className='count'>{count}</span>
			<div className='btnContainer'>
				<button className='increase' onClick={(e) => changeCount(e)}>
					Increase
				</button>
				<button className='reset' onClick={(e) => changeCount(e)}>
					Reset
				</button>
				<button className='decrease' onClick={(e) => changeCount(e)}>
					Decrease
				</button>
			</div>
		</article>
	)
}
