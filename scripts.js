document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Background Color Changer",
            description: "A simple project to change the background color.",
            liveLink: "https://mirnalkishor.github.io/BackGround-color-changer/",
            sourceLink: "https://github.com/Mirnalkishor/WebPlayground/tree/main/Projects/Color-changer"
        },
        {
            title: "Rock Paper Scissor",
            description: "A classic rock paper scissors game.",
            liveLink: "https://mirnalkishor.github.io/hand-game/",
            sourceLink: "https://github.com/Mirnalkishor/WebPlayground/tree/main/Projects/Rock%20Paper%20Scissors%20Game"
        },
        {
            title: "GitHub README File Generator",
            description: "A tool to generate GitHub profile README files.",
            liveLink: "https://mirnalkishor.github.io/GitHub-Profile-README-Generator/",
            sourceLink: "https://github.com/mirnalkishor/GitHub-Profile-README-Generator"
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
