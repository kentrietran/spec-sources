import "./App.css";

const sourceList = [{name: "Presbo", email: "presbo@columbia.edu"},
    {name: "John Jay Mouse", email: "mouse@columbia.edu"},
    {name: "Water Bottle Man", email: "flipper@columbia.edu"}]

function List() {
    return(
    <div class="botton_body">
        {sourceList.map((tagName, index) => (<ListItem index={index+1} name={tagName.name} email={tagName.email}></ListItem>))}
    </div>
    )
}

export default List;

function ListItem({index, name, email}) {
    return(
    <div class="source_part">
        <h3 class="bold_source_word part1"><span>{index}</span></h3>
        <h3 class="bold_source_word part2"><span>{name}</span></h3>
        <h3 class="light_source_word"><span>{email}</span></h3>
        <button class="delete_source_button"><span>DELETE</span></button>
    </div>
    )
}