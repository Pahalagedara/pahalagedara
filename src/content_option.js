const logotext = "PAHALAGEDARA";
const meta = {
    title: "Thilina Pahalagedara",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Thilina Pahalagedara",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Welcome! I'm passionate Full Stack Developer with a knack for building seamless web experiences. From intuitive user interfaces to robust server-side logic, I handle it all with a blend of creativity and technical expertise. Take a look at my work and feel free to reach out if you'd like to discuss a project.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Hello! I graduated from the University of Kelaniya with a BSc (Hons) in Software Engineering, earning Second Class honors. My journey in technology began with a strong foundation in physical sciences at Ibbagamuwa Central College, where I excelled in my A/Ls, earning two A credits in Combined Maths and Physics, and a C credit in Chemistry. \n\n With a solid academic background and a passion for creating dynamic and efficient web applications, I specialize in both front-end and back-end development. My goal is to develop innovative solutions that provide excellent user experiences and robust performance. Explore my portfolio to see my latest projects and feel free to reach out if you'd like to collaborate.",
};
const worktimeline = [
    // {
    //     jobtitle: "Designer of week",
    //     where: "YAdfi",
    //     date: "2020",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "Jamalya",
    //     date: "2019",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Nodejs",
        value: 80,
    },
    {
        name: "Java",
        value: 75,
    },
    {
        name: "Spring boot",
        value: 60,
    },
    {
        name: "Unreal Game Engine",
        value: 60,
    },

];

const services = [{
        title: "Web Development",
        description: "I specialize in developing robust and scalable web applications using a diverse set of modern technologies. My expertise includes front-end development with React, back-end development with Node.js and Express, and enterprise-level solutions with Spring Boot. For database management, I utilize both MySQL and MongoDB to ensure optimal data storage and retrieval. Leveraging Docker for containerization and AWS for cloud services, I deliver reliable, scalable, and efficient applications tailored to meet your specific needs.",
    },
    {
        title: "Mobile Development",
        description: "I specialize in developing high-quality mobile applications with a focus on performance and user experience. Using React Native, I create cross-platform apps that deliver a seamless experience on both iOS and Android devices. Additionally, I have some experience in native Android development using Java, allowing me to leverage the full potential of the Android platform when needed. My goal is to build responsive, efficient, and user-friendly mobile applications that meet your specific needs and enhance your business reach.",
    },
    {
        title: "Game Development",
        description: "As a game developer specializing in Unreal Engine, I've dedicated myself to crafting immersive single-player experiences that captivate players' imaginations. With a blend of creativity and technical expertise, I bring compelling narratives and stunning visuals to life, ensuring each game delivers an unforgettable journey. From concept to execution, I thrive on pushing the boundaries of storytelling and gameplay, creating experiences that leave a lasting impact. Explore my portfolio to discover the worlds I've built and the adventures waiting to be explored.",
    },
];

const dataportfolio = [{
        img: require("../src/assets/images/projects/medec_web.png"),
        description: "Online medical appointment booking landscape. By combining the strengths of existing platforms with innovative features, MEDEC aims to revolutionize the way users access healthcare services in the post-pandemic world",
        link: "https://github.com/UOKSEDevProject/medec-web.git",
    },
    {
        img: require("../src/assets/images/projects/medec_mobile.png"),
        description: "Online medical appointment booking landscape. By combining the strengths of existing platforms with innovative features, MEDEC aims to revolutionize the way users access healthcare services in the post-pandemic world",
        link: "https://github.com/UOKSEDevProject/medec_mobile.git",
    },
    {
        img: require("../src/assets/images/projects/medec_api.png"),
        description: "Online medical appointment booking landscape. By combining the strengths of existing platforms with innovative features, MEDEC aims to revolutionize the way users access healthcare services in the post-pandemic world",
        link: "https://github.com/UOKSEDevProject/medec_api.git",
    },
    {
        img:  require("../src/assets/images/projects/kumarika_web.png"),
        description: "E-Commerce website for Hemas Manufacturing (Pvt) Lt using Wordpress",
        link: "https://kumarika.com/",
    },
    {
        img: require("../src/assets/images/projects/meta_ceyentra.png"),
        description: "An interactive 3D web application developed for Ceyentra Technologies (Pvt) Ltd. The Unity game engine was used for its development.",
        link: "https://meta.ceyentra.com/",
    },
    {
        img: require("../src/assets/images/projects/richdad_simulator.png"),
        description: "Rich Dad Simulator is a life simulator that will make you more mindful of your assets: health, money, and free time. We used the Unreal Engine 5 to develop this.",
        link: "https://store.steampowered.com/app/2394250/Rich_Dad_Simulator/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "tmpahalage@gmail.com",
    YOUR_FONE: "(+94)715282407",
    description: "Hello! Thank you for visiting my website. Whether you have questions about my services, want to collaborate on a project, or just want to say hello, I'd love to hear from you. Please feel free to reach out using the contact form below or via email. I typically respond within 24 hours during business hours.",
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    PUBLIC_ID: process.env.PUBLIC_ID,
};

const socialprofils = {
    github: "https://github.com/Pahalagedara",
    facebook: "https://www.facebook.com/thilina.madushan.184",
    linkedin: "https://www.linkedin.com/in/thilina-pahalagedara-b50b2b17b",
    medium: "https://medium.com/@thilinam4"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};