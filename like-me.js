setInterval(function(){
  var shouldMatch = Number(document.getElementsByClassName('recsCardboard__cards')[0].getElementsByClassName('active')[0].getElementsByClassName('recCard__info')[0].getElementsByClassName('Whs(nw)')[0].innerText.replace(/\D/gi,'')) < 27;
  if(shouldMatch)
    document.getElementsByClassName('recsGamepad__button--like')[0].click();
  else
    document.getElementsByClassName('recsGamepad__button--dislike')[0].click();
}, 1234);
