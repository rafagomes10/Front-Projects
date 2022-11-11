const topButton = document.getElementById('top-button');

window.addEventListener("scroll", function(){
    if(window.scrollY > 800){
        var button = topButton.classList  
        button.remove("hidden-object")
        button.add("slideInRight")
    } 
    
    if(window.scrollY < 200){
        var button = topButton.classList  
        button.add("hidden-object")
        button.remove("slideInLeft")
    }
})

function scrollToTop(event){
    if(event instanceof KeyboardEvent && event.key !== 'Enter') return;
    window.scrollTo({
        top: 0
    })
}
