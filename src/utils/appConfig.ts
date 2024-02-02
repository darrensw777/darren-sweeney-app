const colorBlockTopColor = '#c5c5c5';

export default {
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
            subTitle: "Father, husband, web developer, singer. Have a look around and send me a message if you want to contact me.",
        },
        about: {
            title: "About me",
            subTitle: "TLDR; Living in Lincolnshire, most of my work is taken up with freelance / contract projects. The main areas of work I concentrate on are web development contracts.",
        },
        work: {
            title: "Work / CV",
            subTitle: "My work, please have a look at my CV below. To download a PDF version, click the link.",
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
        image: require('../../assets/images/home-card-images/darren.webp'),
        color1: colorBlockTopColor,
        color2: '#139A7F',
        iconName: 'info-with-circle',
        title: 'About me',
        screenToNavigateTo: 'About',
    }, {
        image: require('../../assets/images/home-card-images/tay1.webp'),
        color1: colorBlockTopColor,
        color2: '#277BB4',
        iconName: 'info',
        title: 'Work / CV',
        screenToNavigateTo: 'Work',
    }, {
        image: require('../../assets/images/home-card-images/darren2.webp'),
        color1: colorBlockTopColor,
        color2: '#815D4E',
        iconName: 'video-camera',
        title: 'Videos',
        screenToNavigateTo: 'Video',
    }, {
        image: require('../../assets/images/home-card-images/darren3.webp'),
        color1: colorBlockTopColor,
        color2: '#BD661A',
        iconName: 'images',
        title: 'Gallery',
        screenToNavigateTo: 'Gallery',
    }, {
        image: require('../../assets/images/home-card-images/darren4.jpeg'),
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
        copy: [
            {
                copy: "Rob is one of the finest vocal talents on the circuit, captivating audiences of all ages with his excellent vocal range and on-stage charisma.",
                key: "para1",
            },
            {
                copy: "Rob first performed at age 10 in the family show “The Linacres”. Performing at the famous Winter Gardens Blackpool in 1978. He turned professional with the band in 1984 until 1999 performing all over the UK.The Linacres headlined the summer season at The Central in 1994 & 1995, and again at The Layton Live in 1997 & 1998, both in Blackpool, England.",
                key: "para2",
            },
            {
                copy: 'In 2000, Rob left The Linacres to create the male show- band "LIFE", fronting the 4 piece vocal group.They performed at various celebrity events including the wedding of Tracey Shaw(British actress) and also were chosen to perform at the "Kirsty Appeal" charity events run by David and Victoria Beckham and Mohamed Al-Fayed in 2002.',
                key: "para3",
            },
            {
                copy: "Rob went solo in 2005 and has performed for many cruise companies since 2006. He has performed over 200 contracts for Carnival UK, Holland America, Seabourn, Fred Olsen and Saga Prestige Cruise Holdings to name but a few, travelling around the globe.",
                key: "para4",
            },
            {
                copy: "Rob successfully headlined the summer season at The Layton Live show in Blackpool in 2010 & 2011, this time as a solo artist.",
                key: "para5",
            },
            {
                copy: "From 2010 - 2014, Rob worked as a voice coach in his recording studio at his home in the UK to children aged 10 - 16 years.",
                key: "para6",
            },
            {
                copy: "In 2017 Rob toured the state of Arizona in the US for TAD Management with duo Linacre & Knights, performing their outstanding live show singing songs from London's West End shows and broadway.",
                key: "para7",
            },
            {
                copy: "He is currently working with TAD Management, still performing on cruise ships and working corporate venues in the UK for Terry Davies and his amazing TAD family.",
                key: "para8",
            },
        ],
    },
    contact: {
        email: "roblinacre@btinternet.com",
        telephone: "+44 07890 739601",
    },
};
