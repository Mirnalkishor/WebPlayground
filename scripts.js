document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Background Color Changer",
            description: "A simple project to change the background color.",
            liveLink: "https://<your-username>.github.io/webplayground/projects/background-color-changer/",
            sourceLink: "https://github.com/<your-username>/webplayground/tree/main/projects/background-color-changer"
        },
        {
            title: "Rock Paper Scissor",
            description: "A classic rock paper scissors game.",
            liveLink: "https://<your-username>.github.io/webplayground/projects/rock-paper-scissor/",
            sourceLink: "https://github.com/<your-username>/webplayground/tree/main/projects/rock-paper-scissor"
        }
        // Add more projects as needed
    ];

    const projectsList = document.getElementById("projects-list");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        
        const liveLink = document.createElement("a");
        liveLink.href = project.liveLink;
        liveLink.textContent = "Live View";
        liveLink.target = "_blank";
        
        const sourceLink = document.createElement("a");
        sourceLink.href = project.sourceLink;
        sourceLink.textContent = "Source Code";
        sourceLink.target = "_blank";
        
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(liveLink);
        projectCard.appendChild(sourceLink);
        
        projectsList.appendChild(projectCard);
    });
});
