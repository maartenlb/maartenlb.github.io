const projects = [
    {
        title: "Skyrim - Custom Voiced Follower, Lundah Bristleburn",
        description: "Custom voiced follower for Skyrim. Made with the Creation Kit.",
        backgroundImage: "assets/images/skyrim/skyrim_bg.jpg",
        images: [
            { src: "assets/images/skyrim/lundah_bristleburn_whiterun.jpg", description: "Lundah with custom armor." },
            { src: "assets/images/skyrim/lundah_skyrim_ck.png", description: "Creating in the Creation Kit looks like this." }
        ],
        video: "https://www.youtube.com/embed/HFJlyaLAc1I"
    },
    {
        title: "Mount & Blade: Warband - Various Edits, Tweaks and Textures",
        description: "I have created all kinds of edits for Mount & Blade, most simple, some a bit more complex (or just more work!).",
        backgroundImage: "assets/images/mount_blade/mb_background.jpg",
        images: [
            { src: "assets/images/mount_blade/viking_conquest_blank.jpg", description: "From a boring sail..." },
            { src: "assets/images/mount_blade/viking_conquest_dutch.jpg", description: "To ruling the seas once more!" }
        ],
        video: null // No video for this project
    },
    {
        title: "Project 3",
        description: "This is a description of Project 3.",
        backgroundImage: "assets/images/project3-bg.jpg",
        images: [
            { src: "assets/images/project3-1.jpg", description: "Description for Project 3 Image 1" }
        ],
        video: "https://www.youtube.com/embed/your-video-id-2"
    }
];

const projectsContainer = document.getElementById("projects");

projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";
    projectElement.style.backgroundImage = `url(${project.backgroundImage})`;

    const title = document.createElement("h2");
    title.textContent = project.title;
    projectElement.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    projectElement.appendChild(description);

    // Create image grid
    const imageGrid = document.createElement("div");
    imageGrid.className = "image-grid";

    project.images.forEach(image => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container";

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.description; // Add alt text for accessibility
        imgContainer.appendChild(img);

        const imgDescription = document.createElement("p");
        imgDescription.className = "image-description";
        imgDescription.textContent = image.description;
        imgContainer.appendChild(imgDescription);

        imageGrid.appendChild(imgContainer);
    });

    projectElement.appendChild(imageGrid);

    if (project.video) {
        const iframe = document.createElement("iframe");
        iframe.src = project.video;
        projectElement.appendChild(iframe);
    }

    projectsContainer.appendChild(projectElement);
});