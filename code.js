$(document).ready(function(){
    $.get( "posts.json", function( data ) {
alert( data );
});
})