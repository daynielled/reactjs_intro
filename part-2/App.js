const App = () => {
    return (
        <div>
            <Tweet
                username="user1"
                name="User One"
                date="Jan 8, 2024"
                message=" This is my fist tweet"
            />

            <Tweet
                username="user2"
                name="User Two"
                date="Jan 5, 2024"
                message=" This is my second tweet"
            />

            <Tweet
                username="user3"
                name="User Three"
                date="Jan 1, 2024"
                message=" Coding is fun"
            />
        </div>
    )
}