function newItem(){

    //adding item to the lost

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inpitValue === ''){
        alert ('you must write something!');
    } else {
        $('#list').append(li);
    }

    //crossout an item
    li.on ('dblclick', function crossOut(){
        li.toggleclass('strike');

    });

    //add X button to delete an item
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deletListItem(){
        li.addClass('delete')
    }
    //reorganise items
    $('#list').sortable();
}


