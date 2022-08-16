document.getElementById('btn-comment').addEventListener('click', function(){
    const  commentBox = document.getElementById('texta');
    const commentText = commentBox.value ;
    
    const divContainer = document.getElementById('div-container')
    const p = document.createElement('p');
    p.innerText = commentText;
    divContainer.appendChild(p);
    commentBox.value = '' ;
   

})