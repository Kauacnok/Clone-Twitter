import { FormEvent, KeyboardEvent, useState } from 'react'
import { PaperPlaneRight } from 'phosphor-react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import '../styles/status.css'

export function Status() {
	const [answers, setAnswers] = useState([
		'opa',
		'hello',
		'teste'
	])

	const [newAnswerText, setNewAnswerText] = useState('')

	function createNewTweetAnswer(event: FormEvent) {
		event.preventDefault()

		setAnswers([newAnswerText, ...answers])
		setNewAnswerText('')
	}

	function handleHotKeySubmit(event: KeyboardEvent) {
		if (event.key === "Enter" && (event.ctrlKey || event.metaKey )) {
			setAnswers([newAnswerText, ...answers])
			setNewAnswerText('')
		}
	}

	return (
		<main className="status">
			<Header title="tweet" />

			<Tweet text="Criei um clone do twitter" />
			<Separator />
			<form className="answer-tweet-form" onSubmit={createNewTweetAnswer}>
				<label htmlFor="tweet">
					<img src="https://avatars.githubusercontent.com/u/74678945?v=4" alt="Kauacnok avatar" />
					<textarea 
						id="tweet" 
						placeholder="Tweet your answer" 
						value={newAnswerText}
						onKeyDown={handleHotKeySubmit}
						onChange={(event) => {
							setNewAnswerText(event.target.value)
						}}
					/>
				</label>
				<button type="submit">
					<PaperPlaneRight />
					<span>Answer</span>
				</button>
			</form>

			{answers.map((answer) => {
				return <Tweet text={answer} key={answer} />
			})}
		</main>
	)
}