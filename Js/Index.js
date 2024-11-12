// Array of projects 
const projects = [
    {
        title: 'Shoptacle project' ,
        description : 'This project was my 4th attempt on UI/UX Design' ,
        url: 'https://www.figma.com/proto/WXPyqm0fvEYTfYXTVI5SaC/Time-piece-treasure-landing-page?page-id=&node-id=45-132&node-type=canvas&viewport=-206%2C1173%2C0.2&t=M4fI99nmiTmyNfdB-1&scaling=scale-down-width&content-scaling=fixed'
    },
    {
        title: 'Real Estate project' ,
        description : 'This project was my 3rd attempt on UI/UX Design' ,
        url: 'https://www.figma.com/proto/LpXzJ8agPcBHXsKaiDg3I4/Dream-homes-landing-page?page-id=0%3A1&node-id=8-6&node-type=frame&viewport=205%2C282%2C0.03&t=YUEGF1KYF9sARlHA-1&scaling=scale-down-width&content-scaling=fixed'
    },
    {
        title: 'Shoptacle project' ,
        description : 'This project was my 4th attempt on web design' ,
        url: 'https://www.figma.com/proto/WXPyqm0fvEYTfYXTVI5SaC/Time-piece-treasure-landing-page?page-id=&node-id=45-132&node-type=canvas&viewport=-206%2C1173%2C0.2&t=M4fI99nmiTmyNfdB-1&scaling=scale-down-width&content-scaling=fixed'
    },
    {
        title: 'Shoptacle project' ,
        description : 'This project was my 4th attempt on web design' ,
        url: 'https://www.figma.com/proto/WXPyqm0fvEYTfYXTVI5SaC/Time-piece-treasure-landing-page?page-id=&node-id=45-132&node-type=canvas&viewport=-206%2C1173%2C0.2&t=M4fI99nmiTmyNfdB-1&scaling=scale-down-width&content-scaling=fixed'
    },
    {
        title: 'Shoptacle project' ,
        description : 'This project was my 4th attempt on web design' ,
        url: 'https://www.figma.com/proto/WXPyqm0fvEYTfYXTVI5SaC/Time-piece-treasure-landing-page?page-id=&node-id=45-132&node-type=canvas&viewport=-206%2C1173%2C0.2&t=M4fI99nmiTmyNfdB-1&scaling=scale-down-width&content-scaling=fixed'
    },
    {
        title: 'Shoptacle project' ,
        description : 'This project was my 4th attempt on web design' ,
        url: 'https://www.figma.com/proto/WXPyqm0fvEYTfYXTVI5SaC/Time-piece-treasure-landing-page?page-id=&node-id=45-132&node-type=canvas&viewport=-206%2C1173%2C0.2&t=M4fI99nmiTmyNfdB-1&scaling=scale-down-width&content-scaling=fixed'
    },
    {
        title: 'Shoptacle project' ,
        description : 'This project was my 4th attempt on web design' ,
        url: 'https://www.figma.com/proto/WXPyqm0fvEYTfYXTVI5SaC/Time-piece-treasure-landing-page?page-id=&node-id=45-132&node-type=canvas&viewport=-206%2C1173%2C0.2&t=M4fI99nmiTmyNfdB-1&scaling=scale-down-width&content-scaling=fixed'
    },
    
];
// Function to load projects 

function loadprojects() {
    const projectsList = document.getElementById('project-list');

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
         
        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="${project.url}" title=" ${project.title}" class="projects-iframe"></iframe>
        `;

        projectsList.appendChild(projectCard);


    });
}

// load project when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadprojects);