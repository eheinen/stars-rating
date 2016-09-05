document.addEventListener("DOMContentLoaded", function(event) {
    container = document.getElementsByClassName('stars-rating-container')[0];
    if(container != undefined){
       starsfull = parseInt(container.dataset['starsfull'])
       starsempty = parseInt(container.dataset['starsempty'])
       if(starsfull != NaN && starsempty != NaN){
          container.innerHTML = getStars(starsfull, starsempty);
       }
    }
});

function getStars(fullQty, emptyQty) {
    if(fullQty != undefined && emptyQty != undefined){
        var html = "<div class='container-stars-rating'>"
        for(var i=0; i < fullQty; i++){
            html += "<img src='images/full.png'>"
        }
        for(var i=0; i < emptyQty; i++){
            html += "<img src='images/empty.png'>"
        }
        html += "</div>"
        return html;
    }
    else
      return "";
}
