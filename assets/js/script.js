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
        title: "Pathfinder: Kingmaker - Full Respecialization and Rule Bending Paladins",
        description: "Pathfinder: Kingmaker is a beautiful RPG of a massive scale, but you cannot truly respec companions, only reset them to level 1. What if I wanted the default cleric party member to be a full fighter? Impossible in the base game. Another issue I had was that paladins were beholdened to the Lawful Good alignment, which can be very limiting with how it is implemented in the game. Many dialogue options have alignments attached to them and when you select them your alignment shifts very slightly to that direction, sadly there's a lot of Good and Evil aligned dialogue options and less Lawful and Chaotic options. The result? Many paladins turned Neutral Good and lost access to their paladin powers as they were no longer the required alignment! So I changed them a little. While these edits were made to Kingmaker, the same edits can also be made to the sequel, Wrath of the Righteous, as the developers built Wrath on the basis of Kingmaker.",
        backgroundImage: "assets/images/pathfinder/pathfinder_bg.jpg",
        images: [
            { src: "assets/images/pathfinder/pf_harrim_cleric_1.jpg", description: "Here is Harrim, our cleric. I want to respec him into a fighter, but the game will only let me reset him to his starting state (which is a level 1 cleric)." },
            { src: "assets/images/pathfinder/pf_harrim_multiclass.jpg", description: "If I try to edit his starting state in the code to fighter, the game will reject it and crash on loading the savefile. However, we can circumvent this by multiclassing him to fighter first, then editing his base class and finally loading the save!" },
            { src: "assets/images/pathfinder/pf_harrim_fighter_1.jpg", description: "The end result? After editing his starting state, loading the game where he is multi-classed and then respeccing him... We turned Harrim into a fighter (I also took the opportunity to change his statline)." },
            { src: "assets/images/pathfinder/pf_dnspy.png", description: "As Pathfinder: Kingmaker is a Unity game, modding it means going through DLLs. I used the wonderful dnSpy tool to help me with this. Luckily the code itself is C#, an object oriented language I am familiar with." },
            { src: "assets/images/pathfinder/pf_dialogue_options.jpg", description: "With options like this... it becomes easy for a paladin to fall." },
            { src: "assets/images/pathfinder/pf_arkandir_neutral_good.jpg", description: "Here's a paladin player character, sadly his alignment has shifted to Neutral Good and thus..." },
            { src: "assets/images/pathfinder/pf_arkandir_lay_on_hands_off.jpg", description: "We can no longer use Lay on Hands... As we are not Lawful Good." },
            { src: "assets/images/pathfinder/arkandir_smite_evil_glory.jpg", description: "So I removed the alignment restrictions from paladin abilities and paladin levelling. I also replaced the Paladin's smite evil with a domain power from their deity (but this is on the side, as there are very little evil enemies in the game the ability sees very little use)." },
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
        description: "While not strictly videogame related. As a long-time DM playing on Virtual Tabletops I have created many a custom macro in Roll20 and implemented some automated custom skills in Foundry. While not literally videogame related, the resemblace is close enought that I felt it deserved a place on this page (albeit at the bottom).",
        backgroundImage: "assets/images/dnd/dnd_bg.jpg",
        images: [
            { src: "assets/images/dnd/dnd_foundry_attribute.png", description: "Foundry has a lot of possibility for automation, but sometimes finding the right attributes to implement a recently published or unearthed arcana feature can be hard. But it feels so right when all functions as it should." },
            { src: "assets/images/dnd/dnd_leran_macros.png", description: "I feel that roll20 has their attributes much more visible. You can find all your character's attributes in the settings of the sheet and call them in any roll. I've created many a custom macro for my player characters and my player's characters. I even got automatic animations on attacks and spellcasts working." },
            { src: "assets/images/dnd/dnd_balefire_items.png", description: "One thing I love is that you can mix worldbuilding, game design and technical implementation!" },
            { src: "assets/images/dnd/dnd_map_fractal.png", description: "In an apocalyptic world-ending scenario. I thought a Mandelbrot fractal render would be a nice way to visualize the end of the world on the map."}


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