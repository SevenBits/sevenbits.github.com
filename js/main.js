/* Site wide Javascript. This stuff is run on every page. */

function setupLayout() {
    setInterval('adjustLayout();', 1000);
}

setupLayout();

function adjustLayout() {
    try {
        var divB = $get('.main-page-content');
        var divAHeight = 20px;
        divB.style.height = document.body.clientHeight - divAHeight ;
    }
    catch (e) { }
}