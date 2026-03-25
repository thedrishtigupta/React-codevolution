
export const CustomButton = () => {

    const handleClick = () => {
        alert("Thanks for liking!");
    };

    return (
        // <button onClick={() => alert("Thanks for liking!")}>Like</button> // Inline
        <button onClick={handleClick}>Like</button>
    );
};

// Not onClick={handleClick()} -> because it will invoke the function immediately
// (without clicking), and thats not what we want