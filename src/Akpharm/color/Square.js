const Square = ({ colorvalue }) => {
    return (
        <div
            className="w-75 h-75 border flex-wrap-reverse"
            style={{backgroundColor: colorvalue}}
        >
            <div className="flex-wrap">
                <p className="text-info">{colorvalue? colorvalue: "empty note"}</p>
            </div>
            
        </div>
    );
}
export default Square;