const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-username">{username}</span>
                <span className="tweet-name">{name}</span>
                <span className="tweet-date">{date}</span>
            </div>
            <div className="tweet-message">{message}</div>
        </div>
    )

}