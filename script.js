console.log('connected');


$('#closeBtn').click(function () {
    console.log('connected');
    $('.main-navigation').toggleClass('open');
    let nav = $('nav');
    let btn = $('#closeBtn');
    console.log(nav.hasClass('open'));
    if (nav.hasClass('open')) {
        btn.attr('class', 'fas fa-chevron-circle-up');
    } else {
        btn.attr('class', 'fas fa-chevron-circle-down');
    }
});

// 3.4.DELETES TODO WHEN CLICK ON X ------------------------------------------------------------------------------------------------------------------------
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// 3.3.STRIKES THROUGH IF AN ITEM IS COMPLETED ------------------------------------------------------------------------------------------------------------------------
$("ul[class='list']").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// 3.2.ADDS INPUT - CREATES NEW LI - TO ONE OF THE LISTS ------------------------------------------------------------------------------------------------------------------------
$(".submit").on("click", function() {
    var input = $("input[type='text']").val();
    // checks if input equals the string "enter an item", otherwise it will add "enter an item" as item to the list
    if(input !== "enter an item") {
        // clears the content that we just enetered
        $("input[type='text']").val("");
        // checks if the value is not an empty string
        if(input !== "" && input !== " ") {
            // create a new li and add to ul
            console.log("clicked");
            $("ul[class='list']").append("<li><span><i class='fas fa-trash-alt'></i></span>" + input + "</li>");
        } else {
            $("input[type='text']").val("enter an item");
            $("input[type='text']").on("click", function() {
                $(this).val("");
            });
        }
    }
});


// 03.02_EDIT THE NAMES OF PLAYERS ----------------------------------------------------------
document.querySelector('.container').addEventListener('click', event => {
    const listName = document.querySelector('.site-title'); // targeted element
    let clickTarget = event.target; // clicked element
    
    if (clickTarget === listName) {
        document.querySelector('.site-title').contentEditable = 'true';
        document.querySelector('.site-title').classList.add('editable');
        
        document.querySelector('.site-title').addEventListener('keydown', removeEditableWithEnterKey);
    } else {
        document.getElementById('playerNameDisplay1').innerHTML = document.getElementById('playerNameSrc1').textContent;
        console.log(document.getElementById('playerNameDisplay1').innerHTML);
        console.log('clicked away'); // LATERREMOVE
        document.querySelector('.player-1').classList.remove('editable');
        document.querySelector('.player-1').addEventListener('keydown', removeEditableWithEnterKey);
    }
});
// 03.02_ASSOCIATED FUNCTIONS
// 03.02.01_REMOVE EDITABILITY WITH ENTER KEY
function removeEditableWithEnterKey() {
    if(event.keyCode === 13) {
        document.querySelector('.site-title').contentEditable = 'false';
        document.querySelector('.site-title').classList.toggle('editable');
        document.getElementById('playerNameDisplay1').innerHTML = document.getElementById('playerNameSrc1').textContent;
        console.log(document.getElementById('playerNameDisplay1').innerHTML + 'from inside the function');   // LATERREMOVE
    }
}









//let navButton = document.querySelector('#closeBtn');
//
//navButton.addEventListener('click', function () {
//    let nav = document.querySelector('nav');
//    let btn = document.querySelector('#closeBtn');
//    console.log(nav.hasAttribute('class', 'open'));
//    
//    if (nav.hasAttribute('class', 'open')) {
//        console.log(nav.hasAttribute('class', 'main-navigation open'));
//        console.log('its closed');
//        nav.classList.remove('open');
//        btn.setAttribute('class', 'fas fa-chevron-circle-up');
//    } else {
//        console.log('its open');
//        nav.classList.add('open');
//        btn.setAttribute('class', 'fas fa-chevron-circle-up');
//        console.log(nav.classList);
//    }
//});
