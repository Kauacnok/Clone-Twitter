import { FormEvent, useState, KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import '../styles/timeline.css'

export function Timeline() {
	const [tweets, setTweets] = useState([
		'opa',
		'hello',
		'teste'
	])

	const [newTweetText, setNewTweetText] = useState('')

	function createNewTweet(event: FormEvent) {
		event.preventDefault()

		setTweets([newTweetText, ...tweets])
		setNewTweetText('')
	}

	function handleHotKeySubmit(event: KeyboardEvent) {
		if (event.key === "Enter" && (event.ctrlKey || event.metaKey )) {
			setTweets([newTweetText, ...tweets])
			setNewTweetText('')
		}
	}

	return (
		<main className="timeline" onSubmit={createNewTweet}>
			<Header title="Home" />
			<form className="new-tweet-form">
				<label htmlFor="tweet">
					<img src="https://avatars.githubusercontent.com/u/74678945?v=4" alt="Kauacnok avatar" />
					<textarea 
						id="tweet" 
						placeholder="What's happening?"
						value={newTweetText}
						onKeyDown={handleHotKeySubmit}
						onChange={(event) => {
							setNewTweetText(event.target.value)
						}}
					/>
				</label>
				<button type="submit">Tweet</button>
			</form>

			<Separator />
			{tweets.map((tweet) => {
				return <Tweet text={tweet} key={tweet} />
			})}
		</main>
	)
}