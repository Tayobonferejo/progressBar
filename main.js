    const showCase =  document.getElementById('progressBar');
    const forward = document.getElementById("forward");

    forward.addEventListener("click", function(event) {
        event.preventDefault();
        showCase.classList.add('active');
    });

    const backward = document.getElementById("backward");

    backward.addEventListener("click", function(event){
        event.preventDefault();

        if(showCase.classList.contains("active")){
            showCase.classList.remove('active');
        }
    })