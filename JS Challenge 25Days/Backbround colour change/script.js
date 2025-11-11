const all_div=document.getElementById('parent')
all_div.addEventListener('click',(e)=>{
  const child=e.target;
  const body=document.querySelector('body')
body.style.backgroundColor=child.id;
})