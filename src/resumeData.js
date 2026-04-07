let resumeData = {
  imagebaseurl: "",
  name: "Alex Gelinas",
  role: "",
  thisApp: "https://github.com/bassman2112/gelinas-portfolio",
  skypeid: "",
  roleDescription: "",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/alexgelinas/",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "https://github.com/bassman2112",
      className: "fa fa-github"
    }
  ],
  aboutme:
    "My name is Alex Gelinas, and I am a Backend Engineer with 10+ years of experience building systems which serve millions of people! I came to software through music; I spent years as a touring musician before finding that code scratches the same creative itch (with far fewer eyes watching you). These days I work primarily in Go, C#, Python, and TypeScript, and I care deeply about building reliable, invisible infrastructure which simply works. When I'm not coding, you can find me mountain biking through BC's trails, hanging out with my five cats and my dog Ben, or getting lost in a good visual novel.",
  address: "BC, Canada",
  website: "",
  education: [
    {
      UniversityName: "Berklee College of Music",
      specialization: "BMus - Electronic Production & Design",
      MonthOfPassing: "",
      YearOfPassing: "2014",
      Description:
        "Graduated from Berklee with a degree in Electronic Production & Design, a blend of Music Production and Computer Science. My thesis project was creating a VR game in Unity with spatial audio, over two years prior to the commercial release of VR headsets.",
      Achievements: "GPA: 3.9 - Dean's List - Summa Cum Laude"
    },
    {
      UniversityName: "Grant MacEwan University",
      specialization: "AMus - Music Performance",
      MonthOfPassing: "",
      YearOfPassing: "2010",
      Achievements: "GPA 3.8 - Dean's List"
    }
  ],
  work: [
    {
      CompanyName: "thatgamecompany",
      specialization: "Senior Software Developer",
      MonthOfJoining: "January",
      YearOfJoining: "2023",
      MonthOfLeaving: "January",
      YearOfLeaving: "2026",
      Achievements:
        "Built and maintained backend systems for Sky: Children of the Light, serving 10M+ monthly active users across all major platforms. Worked on a three-person backend team using Go, with a data layer spanning MongoDB, PostgreSQL, Redis, and Nebula Graph, alongside Kafka for event streaming. Shipped a new and robust Relationship service, resolved critical security vulnerabilities in production systems, and built tooling for QA time-travel testing. Deployed services across global infrastructure using Kubernetes, Terraform, and Helm on AWS."
    },
    {
      CompanyName: "Roon Labs",
      specialization: "Senior Software Developer",
      MonthOfJoining: "July",
      YearOfJoining: "2021",
      MonthOfLeaving: "December",
      YearOfLeaving: "2022",
      Achievements:
        "Worked across C#, C++, Python, and Go to build and improve Roon's music platform. The corpus we worked with was the entirety of released music and all musicians who have ever been recorded or published. Built tools to parse all of Wikipedia to drive the richest metadata experience in the music industry, and helped grow Roon's reach to both audiophiles and everyday music listeners."
    },
    {
      CompanyName: "Ingrooves / Universal Music Group",
      specialization: "Senior Software Developer",
      MonthOfJoining: "June",
      YearOfJoining: "2019",
      MonthOfLeaving: "July",
      YearOfLeaving: "2021",
      Achievements:
        "Built big data services across TypeScript, C#, and Go, deploying via Kubernetes and Helm with CI/CD pipelines. Took projects from initial development and POC through to production deployment with many clients, and served as Product Owner for internal services used across multiple teams."
    },
    {
      CompanyName: "AudioWorks Technology",
      specialization: "Principal Backend Developer",
      MonthOfJoining: "September",
      YearOfJoining: "2017",
      MonthOfLeaving: "May",
      YearOfLeaving: "2019",
      Achievements:
        "Led the backend and web infrastructure for AudioWorks' suite of music collaboration and education tools. Built Audiolog, a cloud sync system that remains in active use years later. Managed the full web project lifecycle using JavaScript, TypeScript, React, Python, and C++, deployed via Docker and Kubernetes on Azure."
    },
    {
      CompanyName: "Themes & Variations",
      specialization: "Software Developer",
      MonthOfJoining: "September",
      YearOfJoining: "2014",
      MonthOfLeaving: "October",
      YearOfLeaving: "2016",
      Achievements:
        "My first game development role. Built interactive music education software (still) used in classrooms, combining my musician background with software development to create engaging learning experiences for students."
    }
  ],
  skillsDescription: "",
  skills: [
    {
      skillname: "Go"
    },
    {
      skillname: "C# / .NET"
    },
    {
      skillname: "Python"
    },
    {
      skillname: "TypeScript / Node"
    },
    {
      skillname: "MongoDB / PostgreSQL / Redis"
    },
    {
      skillname: "Kafka / Event Streaming"
    },
    {
      skillname: "Kubernetes / Terraform / Helm"
    },
    {
      skillname: "AWS / Azure"
    },
    {
      skillname: "Music Production / Performance"
    }
  ],
  portfolio: [
    {
      name: "Palimpsest",
      shortDescription: "A true alternative to paid PDF readers. No subscriptions, no telemetry, no paywalls.",
      description:
        "Palimpsest is an open-source PDF tool built with Tauri and Rust, designed to be everything Adobe Acrobat should be without the extractive business model. It handles viewing, annotation, form filling, and more. Licensed under AGPL-3.0 because good tools should respect their users.",
      technologies: "Tauri, Rust, TypeScript, React",
      thumbnailurl: "images/portfolio/palimpsest.png",
      imgurl: "images/portfolio/palimpsest.png",
      linkText: "Check out Palimpsest on GitHub!",
      linkURL: "https://github.com/bassman2112/Palimpsest"
    },
    {
      name: "Sky: Children of the Light",
      shortDescription: "Backend systems for 10M+ monthly players worldwide.",
      description:
        "As part of a very small backend team at thatgamecompany, I built and maintained the services that kept Sky's millions of players connected. This included shipping a robust Relationship service, fixing critical security vulnerabilities, building compensation scripts for production incidents, and creating time-travel functionality for QA testing. The stack was Go with MongoDB, PostgreSQL, Redis, Nebula Graph, and Kafka, deployed globally via Kubernetes, Terraform, and Helm on AWS.",
      technologies: "Go, MongoDB, PostgreSQL, Redis, Kafka, Kubernetes, Terraform, Helm, AWS",
      thumbnailurl: "images/portfolio/tgc.png",
      imgurl: "images/portfolio/modals/tgc.png",
      linkText: "Learn more about Sky: Children of the Light",
      linkURL: "https://www.thatskygame.com/"
    },
    {
      name: "AudioWorks",
      shortDescription: "Music collaboration and education platform.",
      description:
        "I was the lead developer and project manager for the web side of AudioWorks Technologies' projects, bringing collaboration, education, and community to musicians. This included a fully-featured in-house DAW, a microservices backend on Docker and Kubernetes, proprietary online version control, and VR-based education tools. I also built Audiolog, a cloud sync system that remains in active use years later.",
      technologies:
        "JavaScript, TypeScript, React, Redux, Node, Python, Django, C++, MongoDB, PostgreSQL, Docker, Kubernetes, Azure",
      thumbnailurl: "images/portfolio/aw.png",
      imgurl: "images/portfolio/modals/m-aw.png",
      linkText: "Learn more about AudioWorks here",
      linkURL: "https://www.linkedin.com/company/audioworks-technologies/"
    },
    {
      name: "Fyx",
      shortDescription: "It's a Podcast!",
      description:
        "Gaming Fyx is a weekly podcast by six friends from around the world. We talk about video games, anime, comic books, hiking, and more. I handled all production aspects of the show: streaming, recording, editing, the website, and RSS distribution across all podcast providers.",
      technologies: "Authored WP Theme, Authored RSS Feed, AWS, Cubase, OBS",
      thumbnailurl: "images/portfolio/fyx.jpg",
      imgurl: "images/portfolio/fyx.jpg",
      linkText: "Check out Fyx here!",
      linkURL: "https://fyx.space"
    },
    {
      name: "Music Portfolio",
      shortDescription:
        "A demo piece showcasing a range of styles in a short playtime.",
      description:
        "A short, three-minute track showcasing some of the music work I have done over the years. It covers a broad range of styles, from orchestral to electronic to vocal jazz.",
      technologies: "",
      thumbnailurl: "images/portfolio/ag.png",
      imgurl: "images/portfolio/ag.png",
      linkText: "Listen to a short demo which shows a large swath of my music!",
      linkURL: "https://soundcloud.com/bassman2112/gelinas-audio-examples-music"
    },
    {
      name: "The Girl Who Fell From the Sky",
      shortDescription: "My take on a classic piece from a beautiful OST",
      description:
        "This labour of love came from my adoration for the classic Ghibli film, 'Laputa: Castle in the Sky.' It is fully MIDI apart from the vocalists.",
      technologies: "",
      thumbnailurl: "images/portfolio/gwf.jpg",
      imgurl: "images/portfolio/gwf.jpg",
      linkText: "Listen to The Girl Who Fell From The Sky here!",
      linkURL:
        "https://soundcloud.com/bassman2112/the-girl-who-fell-from-the-sky"
    },
    {
      name: "Setting Sail, Coming Home",
      shortDescription:
        "Featured by OCRemix, my vocal jazz take on a great track from the game Bastion",
      description:
        "Bastion has a wonderful soundtrack, and I felt that one of its most iconic tracks would be exciting as a vocal jazz piece. This version has been featured on OCRemix, and original composer Darren Korb has expressed his affection for it as well.",
      technologies: "",
      thumbnailurl: "images/portfolio/ssch.jpg",
      imgurl: "images/portfolio/ssch.jpg",
      linkText: "Listen to Setting Sail, Coming Home here!",
      linkURL: "https://soundcloud.com/bassman2112/setting-sail-coming-home"
    }
  ]
};

export default resumeData;