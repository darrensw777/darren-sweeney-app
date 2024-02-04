const colorBlockTopColor = '#c5c5c5';

export default {
    siteSettings: {
        fontSize: 18,
        padding: 20,
        name: 'Darren Sweeney'
    },
    colors: {
        primary: "#fff",
        secondary: "#fff",
        textColor: '#333',
        bottomNavIcons: '#333',
        border: '#ccc',
        lightGreyBg: '#ccc'
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
            subTitle: "Father, JavaScript software developer, singer. Have a look around and send me a message if you want to contact me.",
        },
        about: {
            title: "About me",
            subTitle: "Living in Lincolnshire, most of my work is taken up with freelance / contract projects. The main areas of work I concentrate on are JavaScript software development contracts.",
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
            subTitle: "Please choose either button below to call or email me. Thanks!",
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
        me: [
            {
                src: require("../../assets/images/gallery/darren.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/ds1.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/ds2.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/ds3.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/ds4.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/ds5.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/ds6.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/benidorm1.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/benidorm2.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/benidorm3.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/benidorm4.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/benidorm5.webp"),
                active: true,
            }
        ],
        theBoys: [
            {
                src: require("../../assets/images/gallery/zt1.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/zt3.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/zt4.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/zt5.webp"),
                active: true,
            }
        ],
        singing: [
            {
                src: require("../../assets/images/gallery/singing4.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/singing1.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/singing2.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/singing3.webp"),
                active: true,
            },
            {
                src: require("../../assets/images/gallery/singing5.webp"),
                active: true,
            }
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
        email: "studiotime@hotmail.co.uk",
        telephone: "+44 (0)788 496 7608",
    },
};
