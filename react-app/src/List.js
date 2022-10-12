import "./App.css";

function List() {
    return(
<div class="botton_body">
    <div class="source_part">
        <h3 class="bold_source_word part1"><span>1</span></h3>
        <h3 class="bold_source_word part2"><span>Presbo</span></h3>
        <h3 class="light_source_word"><span>presbo@columbia.edu</span></h3>
        <button class="delete_source_button"><span>DELETE</span></button>
    </div>

    <div class="source_part">
        <h3 class="bold_source_word part1"><span>2</span></h3>
        <h3 class="bold_source_word part2"><span>John Jay Mouse</span></h3>
        <h3 class="light_source_word"><span>mouse@columbia.edu</span></h3>
        <button class="delete_source_button"><span>DELETE</span></button>
    </div>

    <div class="source_part">
        <h3 class="bold_source_word part1"><span>1</span></h3>
        <h3 class="bold_source_word part2"><span>Water Bottle Man</span></h3>
        <h3 class="light_source_word"><span>flipper@columbia.edu</span></h3>
        <button class="delete_source_button"><span>DELETE</span></button>
    </div>
</div>
    )
}

export default List;