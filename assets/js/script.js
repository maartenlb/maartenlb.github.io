const projects = [
    {
        title: "Skyrim - Custom Voiced Follower, Lundah Bristleburn",
        description: "Custom voiced follower for Skyrim. Made with the Creation Kit. Originally I set out to fix the spellsword AI in Skyrim, as NPCs with the unmodded AI often just used spells when they had magicka and swords when they didn't, instead of a mixture of sword and spell at the same time. Although I had always wanted to try my hand at modding Skyrim, so I took it as an opporunity to learn the ins and outs of the Creation Kit. So with some online resources and a decent knowledge of how Skyrim works, I went at it. Below are the results!",
        backgroundImage: "assets/images/skyrim/skyrim_bg.jpg",
        images: [
            { src: "assets/images/skyrim/lundah_bristleburn_whiterun.jpg", description: "Lundah with custom armor. While he is flagged as unique, he is still found in the same lists as vanilla NPCs, allowing compatibility with popular mods such as Spell Perk Item Distributor." },
            { src: "assets/images/skyrim/lundah_skyrim_ck.png", description: "This is what creating and editing in the Creation Kit looks like. The large amount of menus can be very overbearing, as can the fact that almost every script is ran within a Quest structure." }
        ],
        video: "https://www.youtube.com/embed/HFJlyaLAc1I"
    },
    {
        title: "Mount & Blade: Warband - Various Edits, Tweaks and Textures",
        description: "I have created all kinds of edits for Mount & Blade, most simple, some a bit more complex (or just more work). Over the years this old game has always held a strange but eternal appeal to me. Below are some examples of what I have made for this game.",
        backgroundImage: "assets/images/mount_blade/mb_background.jpg",
        images: [
            { src: "assets/images/mount_blade/mb_banner_modded.jpg", description: "The top row are some of the banners I've made throughout the years. The bottom row are all unmodded banners." },
            { src: "assets/images/mount_blade/mb_heraldic_equipment.jpg", description: "Of course the custom banners are compatible with heraldic equipment! From plate to leather to brigandine to mail! And of course.. all shields! It's important to look your best when representing your house!" },
            { src: "assets/images/mount_blade/viking_conquest_blank.jpg", description: "Ships were introduced in the Viking Conquest DLC. But the unmodded sails seemed a little boring to me." },
            { src: "assets/images/mount_blade/viking_conquest_dutch.jpg", description: "So I made a sail worthy of ruling the seas!" },
            { src: "assets/images/mount_blade/mb_elephant.jpg", description: "Here is my player character with an elephant mount (screenshot from 2015). Normally these are unattainable but with some well placed changes to loot tables..." },
            { src: "assets/images/mount_blade/mb_modded_armor_cost.jpg", description: "The high-tier Custom Knigthood Armours in Prophesy of Pendor have an immense waiting time normally, much to the despair of every player. Funniliy enough, the developers actually added a waiting time reduction option in the most recent release." },
            { src: "assets/images/mount_blade/mb_lethald_vanilla.jpg", description: "Here we have an elven companion..." },
            { src: "assets/images/mount_blade/mb_lethald_modded.jpg", description: "Who has unfortunately become the victim of a showcase of string editing." },
            { src: "assets/images/mount_blade/mb_strings_easy.jpg", description: "Strings are very easy to edit in this game." },
            { src: "assets/images/mount_blade/mb_quest_hard.jpg", description: "Unfortunately, things such as quests, loot tables and waiting times can be a lot more difficult, especially to interpret. A lot of information of which number does what here has been a brute-force search community effort." }
        ],
        video: null // No video for this project
    },
    {
        title: "Godot Games - 2D Platformer and Survivors-like",
        description: "In the later months of 2024 I decided to try my hand at videogame development. I read up on information and followed some tutorials and I ended up with two small but functional games. They primarily served as a hobby and a learning experience. Using the Godot engine was a little stiff for the first game. But I noticed I got the hang of it much more quickly for the second game as the engine became quite intuitive!",
        backgroundImage: "assets/images/godot/godot_bg.png",
        images: [
            { src: "assets/images/godot/godot_lil_knightie.JPG", description: "A simple 2D platformer. My first Godot game, this one is basically fully created from a tutorial. I did try to put some unique features in it such as the death message and the ice platform that slows the player." },
            { src: "assets/images/godot/godot_lil_wizzie.png", description: "A basic survivors-like. My second Godot game, while there are a lot of tutorials for individual functions which I used. I tried to also put a unique spin on some of them. Since one of the tutorials was for the Godot 4 beta, there was actually some information on there that was no longer applicable. Luckily I was familiar enough to debug simple things at this point! Speaking of, I had a lot more fun creating this one as the engine became a more intuitive to me." }
        ],
        video: "https://www.youtube.com/embed/TcCA7fbOVcE?si=fRoqw2MkYlecKKl0"
    },
    {
        title: "Pathfinder: Kingmaker - Full Respecialization and Pious Paladins",
        description: "Description",
        backgroundImage: "assets/images/pathfinder/pathfinder_bg.jpg",
        images: [
            { src: "assets/images/mount_blade/viking_conquest_blank.jpg", description: "From a boring sail..." },
            { src: "assets/images/mount_blade/viking_conquest_dutch.jpg", description: "To ruling the seas once more!" }
        ],
        video: null
    },
    {
        title: "Fallout 4 - Fallout: Cascadia Team Member",
        description: "While I am no longer on the active team. I did contribute to Fallout: Cascadia (https://www.falloutcascadia.com/). I was told I would show up in the credits as Interior Level Designer and Creation Kit Junkie. But in truth every team member does a little bit of everything to help eachother out. While I was mainly designing and implementing interiors (both natural interiors such as caves and human-made interiors such as buildings) I did help out a lot with simple scripting, flagging and conditionals for various quest stages across the mod. And of course, I also needed help from my fellow team members, I am not ashamed to admit that I am still not the best at making sure all the lighting and shadows look good in interior spaces... But I am proud of my pathing, concept and enemy placements!",
        backgroundImage: "assets/images/fallout/fallout_bg.jpg",
        images: [
            { src: "assets/images/fallout/fallout_interior_show.JPG", description: "A little preview from the Fallout: Cascadia showcase." },
            { src: "assets/images/fallout/fallout_interior_ck.png", description: "Custom interior design in the Creation Kit looks like this, note it's extreme similarity to Skyrim's Creation Kit (same engine, same modding tool)." }
        ],
        video: null
    },
    {
        title: "Tabletop - Macro's, Custom Skills in Virtual Tabletops",
        description: "Description",
        backgroundImage: "assets/images/dnd/dnd_bg.jpg",
        images: [
            { src: "assets/images/mount_blade/viking_conquest_blank.jpg", description: "From a boring sail..." },
            { src: "assets/images/mount_blade/viking_conquest_dutch.jpg", description: "To ruling the seas once more!" }
        ],
        video: null // No video for this project
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