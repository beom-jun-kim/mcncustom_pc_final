function relatiionMore(){
    const relation = document.querySelector(".xans-product-relationlist");
    if(!relation){
        return;
    }
	const list = relation.querySelectorAll(".prdList__item");
    const btnMore = relation.querySelector(".btnMore");
    for(let i = 0; i < list.length; i++){
        var target = list[i];
        target.setAttribute('data-index', i);
        if(target.getAttribute('data-index') >= 5){
            target.classList.add("hidden");            
            btnMore.addEventListener('click', function(){
                target.classList.remove("hidden");
                btnMore.style.display = "none";
            });
        }
        if(list.length <= 5){
            btnMore.style.display = "none";
        }
    }
}
relatiionMore();
