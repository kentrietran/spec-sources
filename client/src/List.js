import "./App.css";

function List({sourceList, handleDelete}) {
    return(
    <div class="botton_body">
        {sourceList.map((tagName, index) => (<ListItem index={index} name={tagName.name} email={tagName.email} handleDelete={handleDelete}></ListItem>))}
    </div>
    )
}

export default List;

function ListItem({index, name, email, handleDelete}) {
    return(
    <div class="source_part">
        <h3 class="bold_source_word part1"><span>{index + 1}</span></h3>
        <h3 class="bold_source_word part2"><span>{name}</span></h3>
        <h3 class="light_source_word"><span>{email}</span></h3>
        <button class="delete_source_button" onClick={() => handleDelete(index)}><span>DELETE</span></button>
    </div>
    )
}