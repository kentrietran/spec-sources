import "./App.css";

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
            <h3 class='bold_source_word part1'><span>{id}</span></h3>
            <h3 class='bold_source_word part2'><span>{sourceName}</span></h3>
            <h3 class='light_source_word'><span>{emailName}</span></h3>
            <button class='delete_source_button'><span>DELETE</span></button>
        </div>
    )
}