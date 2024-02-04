const colorBlockTopColor = '#c5c5c5';

export default {
    siteSettings: {
        fontSize: 18,
        padding: 20
    },
    colors: {
        primary: "#fff",
        secondary: "#fff",
        textColor: '#333',
        bottomNavIcons: '#333'
    },

    bottomIcons: [
        {
            id: "About",
            iconName: "information-circle-outline",
            screenName: "About",
            label: "About",
        },
        {
            id: "Music",
            iconName: "musical-notes",
            screenName: "Music",
            label: "Music",
        },
        {
            id: "Video",
            iconName: "videocam",
            screenName: "Video",
            label: "Video",
        },
        {
            id: "Gallery",
            iconName: "images",
            screenName: "Gallery",
            label: "Gallery",
        },
        {
            id: "Contact",
            iconName: "at",
            screenName: "Contact",
            label: "Contact",
        },
    ],
    pageHeaders: {
        home: {
            title: "Home",
            subTitle: "Father, web developer, singer. Have a look around and send me a message if you want to contact me.",
        },
        about: {
            title: "About me",
            subTitle: "TLDR; Living in Lincolnshire, most of my work is taken up with freelance / contract projects. The main areas of work I concentrate on are web development contracts.",
        },
        work: {
            title: "Work / CV",
            subTitle: "My work, please have a look at my CV below. If you'd like to contact me, please use the button below",
        },
        video: {
            title: "Videos",
            subTitle: "I do, and always have, loved music, and in particular, singing. Have a look at some of my time on stage...",
        },
        gallery: {
            title: "Gallery",
            subTitle: "Pictures of me and my favourite people!",
        },
        contact: {
            title: "Contact me",
            subTitle: "Please use the form below to contact me and I'll reply as soon as I possibly can. Thanks!",
        },
    },
    homepageColorBlocks: [{
        image: 'about',
        color1: colorBlockTopColor,
        color2: '#139A7F',
        iconName: 'info-with-circle',
        title: 'About me',
        screenToNavigateTo: 'About',
    }, {
        image: 'work',
        color1: colorBlockTopColor,
        color2: '#277BB4',
        iconName: 'info',
        title: 'Work / CV',
        screenToNavigateTo: 'Work',
    }, {
        image: 'video',
        color1: colorBlockTopColor,
        color2: '#815D4E',
        iconName: 'video-camera',
        title: 'Videos',
        screenToNavigateTo: 'Video',
    }, {
        image: 'gallery',
        color1: colorBlockTopColor,
        color2: '#BD661A',
        iconName: 'images',
        title: 'Gallery',
        screenToNavigateTo: 'Gallery',
    }, {
        image: 'contact',
        color1: colorBlockTopColor,
        color2: '#B28915',
        iconName: 'email',
        title: 'Contact me',
        screenToNavigateTo: 'Contact',
    }],
    galleryImages: {
        performing: [
            {
                src: require("../../assets/images/gallery/darren.webp"),
                active: true,
            },
        ],
        atSea: [
            {
                src: require("../../assets/images/gallery/benidorm1.webp"),
                active: true,
            },
        ],
        misc: [
            {
                src: require("../../assets/images/gallery/zt1.webp"),
                active: true,
            },
        ],
    },
    about: {
        heroImagePath: "../../assets/gallery/performing/gallery02.jpg",
        morningGreeting: 'Good morning!',
        afternoonGreeting: 'Good afternoon!',
        eveningGreeting: 'Good evening!',
        interestsTitle: 'Interests',
        interests: [
            {
                title: 'Music',
                copy: [
                    'Journey', 'Steve Perry', '80s AOR', 'Simon and Garfunkel', 'Keane', 'Genesis'
                ]
            },
            {
                title: 'TV Shows',
                copy: ['Suits', 'Reacher', 'Breaking Bad', 'The Witcher', 'Peaky Blinders', 'Mad Men',
                    'The Boys', 'Dragons Den']
            },
            {
                title: 'Movies',
                copy: ['Goodfellas', 'Wall St', 'The Gangs of New York', 'The Wolf of Wall St'],
            },
            { title: 'Sports', copy: ['Golf'] },
            { title: 'Favoutite football team', copy: ['Golf (see Sports)'] },
            { title: 'Hobbies', copy: ['Golf', 'Music (singing)', 'VR', 'Gaming', 'Technology'] }
        ],
        copy: [
            {
                copy: "I currently work in the UK as a front end web developer..",
                key: "para1",
            },
            {
                copy: "In past lives I've been a singer, a welder, worked in retail, and I'm Series 7 Licenced (If you know, you know...)",
                key: "para2",
            },
            {
                copy: 'I strive to create web sites which are as per design, and efficient.',
                key: "para3",
            },
        ],
    },
    contact: {
        email: "roblinacre@btinternet.com",
        telephone: "+44 07890 739601",
    },
};
