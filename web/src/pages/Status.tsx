import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import '../styles/status.css'

const answers = [
	'opa show',
	'boa',
	'daora'
]

export function Status() {
	return (
		<main className="status">
			<Header title="tweet" />

			<Tweet text="Criei um clone do twitter" />
			<Separator />
			<form className="answer-tweet-form">
				<label htmlFor="tweet">
					<img src="https://avatars.githubusercontent.com/u/74678945?v=4" alt="Kauacnok avatar" />
					<textarea id="tweet" placeholder="Tweet your answer" />
				</label>
				<button type="submit">Answer</button>
			</form>

			{answers.map((answer) => {
				return <Tweet text={answer} key={answer} />
			})}
		</main>
	)
}