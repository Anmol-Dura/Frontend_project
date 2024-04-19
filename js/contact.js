let logTab = document.getElementById('logout');
document.addEventListener('DOMContentLoaded', function(){
    let userLogged = localStorage.getItem('islogged');

    let wishlistItems = document.querySelectorAll(".Wishlist");
    if (userLogged == 'true'){
        wishlistItems.forEach(function(item) {
            item.style.display = 'block';
        });
        logTab.textContent = "LogOut"
    }
    else {
        wishlistItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
})

logTab.addEventListener('click',function(e){
  e.preventDefault();
  let tabtext = logTab.textContent;
  console.log(tabtext)
  if (tabtext === 'LogOut'){
      localStorage.clear();
      localStorage.setItem('islogged',false)
      logTab.textContent = "LogIn"
  }
  window.location.href = './pages/login.html';
})