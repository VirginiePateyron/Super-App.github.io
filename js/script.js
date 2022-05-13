const navList = document.querySelectorAll('.nav-item')

// function for use in eventListener passing in event => e
function setActive(e){
  // get the parent of the event the UL
  const navList = e.target.navList
  // query the navList and get the active class
  const active = navList.querySelector('.active')
  // check for active class
  if(active){
    // toggle active class
    active.classList.toggle('active')
  }
  // add active class
  e.target.classList.add('active')
}

// forEach loop defining each node as the variable listItem
navList.forEach('.nav-item' => {
  // running click eventListener on each listItem with our setActive function
  '.nav-item'.addEventListener("click", setActive)
})