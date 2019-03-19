$(document).ready(function() { 
    // call the tablesorter plugin 
    $("#classic-standings").tablesorter({ 
        // sort on the first column and third column, order asc 
        sortList: [[9,0],[2,0]] 
    }); 
}); 

::-webkit-scrollbar {
    width: 15px;
    background: transparent; /* make scrollbar transparent */
}