const sourceList = [{ sourceName: "Presbo", emailName: "presbo@columbia.edu" }, { sourceName: "John Jay Mouse", emailName: "mouse@columbia.edu" }, { sourceName: "Water Bottle Man", emailName: "flipper@columbia.edu" }]

function List() {
    return (
        <div class="button_body">
            {/* <!-- List Item 1 --> */}
            {sourceList.map((source, index) => (
                <ListItem id={index + 1} sourceName={source.sourceName} emailName={source.emailName}></ListItem>
            ))}
        </div>
    )
}

export default List;

function ListItem({ id, sourceName, emailName }) {
    return (
        <div class="source_part">
            <div class='bold_source_word part1'>{id}</div>
            <div>
                <div class='bold_source_word part2'>{sourceName}</div>
                <div class='light_source_word'>{emailName}</div>
            </div>
            <div class='delete_source_button'></div>
        </div>
    )
}