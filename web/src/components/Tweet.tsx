import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'
import '../styles/tweet.css'

interface TweetProps {
	text: string
}

export function Tweet({ text }: TweetProps) {
	return (
		<a href="#" className="tweet">
			<img src="https://avatars.githubusercontent.com/u/74678945?v=4" alt="Avatar kauacnok" />
			<div className="tweet-content">
				<div className="tweet-content-header">
					<strong>Kauacnok</strong>
					<span>@kauacnok</span>
				</div>
				<p>{text}</p>

				<div className="tweet-content-footer">
					<button type="button">
						<ChatCircle />
						20
					</button>
					<button type="button">
						<ArrowsClockwise />
						20
					</button>
					<button type="button">
						<Heart />
						20
					</button>
				</div>
			</div>
		</a>
	)
}