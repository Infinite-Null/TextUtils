function Preview(props) {
    return (
        <>
            <h2>Preview</h2>
            <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                {props.val}
            </div>
        </>
    )
}

export default Preview;

