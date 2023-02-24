function newItem(){

    //adding item to the lost

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === ''){
        alert ('you must write something!');
    } else {
        $('#list').append(li);
    }

    //crossout an item
    function crossOut(){
        li.toggleClass('strike');
    }

    li.on ('dblclick', function crossOut(){
        li.toggleClass('strike');

    });

    //add X button to delete an item

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass('delete')
    }
    //reorganise items

    $('#list').sortable();
}


