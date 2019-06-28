// 00_GENERALL
// 00.01_LATERREMOVE lines are there to check code and should be removed later
console.log('js connected');

function printLocation() {
    console.trace();
}

// 01_GLOBAL VARIABLES ----------------------------------------------------------------------------------------------
let nameList = document.querySelector('.listName');
let nameOnSlider = document.querySelector('.title span');
console.log(nameOnSlider);
// 02_EVENT LISTENERS

// 03_FUNCTIONS -----------------------------------------------------------------------------------------------------
// 03.01_OPEN/ CLOSE SLIDING DRAWER and change icon  
$('#closeBtn').click(function () {
    $('.main-navigation').toggleClass('open');
    
    let nav = $('nav');
    let btn = $('#closeBtn');
    console.log(nav.hasClass('open'));
    if (nav.hasClass('open')) {
        btn.attr('class', 'fas fa-chevron-circle-up');
        $('main').css('opacity', '0');
    } else {
        btn.attr('class', 'fas fa-chevron-circle-down');
        $('main').css('opacity', '1');
    }
});
// 03.02_EDIT LIST NAME AND PASS IT TO THE TITLE ON THE SLIDING DRAWER ----------------------------------------------
document.querySelector('.container').addEventListener('click', event => {
    const listName = document.querySelector('.listName'); // targeted element
    let clickTarget = event.target; // clicked element
    let listNameOnSlide = document.querySelector('.title span');

    if (clickTarget === listName) {
        nameList.contentEditable = 'true';
        nameList.classList.add('editable');
        nameList.addEventListener('keydown', removeEditableWithEnterKey);
    } else {
        if (listName.textContent !== 'your todos list') {
            replaceListName(listNameOnSlide);
        }
        nameList.classList.remove('editable');
        nameList.addEventListener('keydown', removeEditableWithEnterKey);
        console.log(nameOnSlider);
    }
});
// 03.02.01_REMOVE EDITABILITY WITH ENTER KEY -----------------------------------------------------------------------
function removeEditableWithEnterKey() {
    if (event.keyCode === 13 || event.keyCode === 27) {
        nameList.contentEditable = 'false';
        nameList.classList.toggle('editable');
        nameList.classList.remove('editable');
    }
}
// 03.02.02_REPLACING THE NAME ON THE SLIDING DRAWER ----------------------------------------------------------------
function replaceListName(listNameOnSlide) {
    console.log(nameOnSlider);
    listNameOnSlide.textContent = nameList.textContent;
    listNameOnSlide.style.fontWeight = '600';
}
// 03.03.DELETES TODO WHEN CLICK ON X -------------------------------------------------------------------------------
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
// 03.04.STRIKES THROUGH IF AN ITEM IS COMPLETED --------------------------------------------------------------------
$("ul[class='list']").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// 03.05.ADDS INPUT - CREATES NEW LI - TO ONE OF THE LISTS ----------------------------------------------------------
$(".submit").on("click", function () {
    var input = $("input[type='text']").val();
    // checks if input equals the string "enter an item", otherwise it will add "enter an item" as item to the list
    if (input !== "enter an item") {
        // clears the content that we just enetered
        $("input[type='text']").val("");
        // checks if the value is not an empty string
        if (input !== "" && input !== " ") {
            // create a new li and add to ul
            console.log("clicked");
            $("ul[class='list']").append("<li><span><i class='fas fa-trash-alt'></i></span>" + input + "</li>");
        } else {
            $("input[type='text']").val("enter an item");
            $("input[type='text']").on("click", function () {
                $(this).val("");
            });
        }
    }
});

// testing *********************************************************










