// Função para filtrar projetos pelo nome
function filterProjects() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const projects = document.querySelectorAll('.containerProject');

    projects.forEach(project => {
        const name = project.querySelector('.projectName').textContent.toLowerCase();
        const category = project.querySelector('.projectBox.category span:nth-child(2)').textContent.toLowerCase();
        const status = project.querySelector('.projectBox.status span:nth-child(2)').textContent.toLowerCase();
        const city = project.querySelector('.projectBox.city span:nth-child(2)').textContent.toLowerCase();
        const year = project.querySelector('.projectBox.year span:nth-child(2)').textContent.toLowerCase();
        // Mostrar/ocultar com base no nome do projeto
        if (name.includes(searchInput) || 
            category.includes(searchInput) || 
            status.includes(searchInput) || 
            city.includes(searchInput) || 
            year.includes(searchInput)) {
                project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
}

document.querySelector('.submitFilter').addEventListener('click', filterProjects);
