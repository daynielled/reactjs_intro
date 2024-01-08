const App = () => {
    const personsData = [
        {
            name: 'John Doe',
            age: 25,
            hobbies: ['Reading', 'Gaming', 'Coding'],
        },
        {
            name: 'Alice',
            age: 30,
            hobbies: ['Traveling', 'Photography', 'Hiking'],
        },
        {
            name: 'Bob',
            age: 16,
            hobbies: ['Swimming', 'Drawing', 'Music'],
        },
    ];

    return (
        <div>
            {personsData.map((person, index) => (
                <Person key={index} {...person} />
            ))}
        </div>
    );
};