// addItem takes users input and creates an li item for that input with check and delete buttons
function addItem() {
    $("#js-shopping-list-form").on("submit", function(event){
        event.preventDefault();
        const item = $(this).find("input").val();
        const deleteLabel= "<span class='button-label'>delete</span>";
        const buttonLabel= "<span class='button-label'>check</span>";
        const buttonToggle= "<button class='shopping-item-toggle'>" + buttonLabel + "</button>";
        const buttonDelete= "<button class='shopping-item-delete'>" + deleteLabel + "</button>";
        const spanTag= "<span class='shopping-item'>" + item + "</span>";
        const divTag= "<div class='shopping-item-controls'>" + buttonToggle + buttonDelete +"</div>";
        const $li = $('<li></li>').append(spanTag).append(divTag);

        $(".shopping-list").append($li);
    });
}
// checkDeleteItem: check button toggles shopping-item__checked and delete button removes li
function checkDeleteItem() {
    $(".shopping-list").on("click", function(event){
        const $target = $(event.target);
        const $li = $(event.target).closest($("li"));
        const isButtonToggle = $target.hasClass("shopping-item-toggle");
        const isToggleLabel = $target.parent().hasClass("shopping-item-toggle");
        const isButtonDelete = $target.hasClass("shopping-item-delete");
        const isLabelDelete = $target.parent().hasClass("shopping-item-delete");
        if (isButtonToggle || isToggleLabel) {
            $li.find(".shopping-item").toggleClass("shopping-item__checked");
        }
        else if (isButtonDelete || isLabelDelete) {
            $li.remove();
        }
    });
}



addItem();
checkDeleteItem();

