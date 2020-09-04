
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  const coll = document.getElementsByClassName("collapsible");
  let i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
        console.log(this);
        console.log(this.id);
        let currentid = "."+this.id;
        let currentElement = document.querySelector(currentid);

   let content = currentElement.nextElementSibling;

   if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
    });
  }