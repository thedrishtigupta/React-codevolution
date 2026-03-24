
export const CardWrapper = ({title, children}) => {

    return(
        <div className="card-wrapper">
        <h1>{title}</h1>
        <div className="card-content">{children}</div>
        </div>
    );
};