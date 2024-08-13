function filter (){
    var showFilter = document.getElementById('hidden');
    var appContent = document.querySelector('.projectArea');
    
    if(showFilter.style.display === 'none' || showFilter.style.display === ''){
        showFilter.style.display = 'block'
        appContent.style.opacity = 0.7;
        showFilter.style.opacity = 1;
    } else {
        showFilter.style.display = 'none'
        appContent.style.opacity = 1;
    }
}

function fechar(){
    document.getElementById('hidden').style.display = 'none';
    document.querySelector('.projectArea').style.opacity = 1;
}

document.querySelector('.submitFilter').addEventListener('click', fechar);