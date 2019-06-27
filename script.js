// 00_GENERALL
// 00.01_LATERREMOVE lines are there to check code and should be removed later
console.log('js connected');

function printLocation() {
    console.trace();
}

// 01_GLOBAL VARIABLES ----------------------------------------------------------------------------------------------------------------
let nameList = document.querySelector('.site-title');
// 01.01_NUMBERS ==========

// 02_EVENT LISTENERS ------------------------------------------------------------------------------------

// 03_FUNCTIONS -----------------------------------------------------------------
// 03.01_OPEN/ CLOSE SLIDING DRAWER and change icon ----------------------------------------------------------- 
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
// 03.02_EDIT LIST NAME AND PASS IT TO THE TITLE ON THE SLIDING DRAWER ----------------------------------------------------------
document.querySelector('.container').addEventListener('click', event => {
    const listName = document.querySelector('.site-title'); // targeted element
    let clickTarget = event.target; // clicked element
    let listNameOnSlide = document.querySelector('.title span');
    console.log(listName.textContent);

    if (clickTarget === listName) {
        nameList.contentEditable = 'true';
        nameList.classList.add('editable');

        nameList.addEventListener('keydown', removeEditableWithEnterKey);
    } else {
        replaceListName(listNameOnSlide);
        nameList.classList.remove('editable');
        nameList.addEventListener('keydown', removeEditableWithEnterKey);
    }
});
// 03.02_ASSOCIATED FUNCTIONS
// 03.02.01_REMOVE EDITABILITY WITH ENTER KEY
function removeEditableWithEnterKey() {
    let listNameOnSlide = document.querySelector('.title span');

    if (event.keyCode === 13) {
        nameList.contentEditable = 'false';
        nameList.classList.toggle('editable');
        nameList.classList.remove('editable');
        replaceListName(listNameOnSlide);
    }
}

function replaceListName(listNameOnSlide) {
    listNameOnSlide.textContent = nameList.textContent;
    listNameOnSlide.style.fontWeight = '600';
}



// testing *********************************************************






// 3.4.DELETES TODO WHEN CLICK ON X ------------------------------------------------------------------------------------------------------------------------
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
// 3.3.STRIKES THROUGH IF AN ITEM IS COMPLETED ------------------------------------------------------------------------------------------------------------------------
$("ul[class='list']").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// 3.2.ADDS INPUT - CREATES NEW LI - TO ONE OF THE LISTS ------------------------------------------------------------------------------------------------------------------------
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
