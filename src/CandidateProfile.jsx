
export const CandidateProfile = () => {
    const name = "Peter Parker";
    const experience = 5;
    const role = "Web Developer";
    const isAvailable = true;

    return (
        <>
        <h1>{name}</h1>
        <p>{role} with {experience} years of experience</p>
        <p>Status: {isAvailable? "Available for hire" : "Not Available"}</p>
        <p>Contact: {name.toLowerCase().replace(" ", ".")}@gmail.com</p>
        </>
    )
}