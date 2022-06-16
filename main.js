document.querySelectorAll('.post_Reaction').forEach(function(post_Reaction, index){
    post_Reaction.addEventListener('click', function(){
        document.querySelectorAll('.post_Reaction__active')[index].style.display = 'inline';
        post_Reaction.style.display = 'none'
    })
})
document.querySelectorAll('.post_Reaction__active').forEach(function(post_Reaction__active, index){
    post_Reaction__active.addEventListener('click', function(){
        document.querySelectorAll('.post_Reaction')[index].style.display = 'inline';
        post_Reaction__active.style.display = 'none'
    })
})

