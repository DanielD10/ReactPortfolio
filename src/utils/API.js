import careerWiki from "../assets/images/careerResourcesWiki.jpg";
import passwordGen from "../assets/images/passwordGen.png";
import weatherDashboard from "../assets/images/weatherDash.png";
import teamProfile from "../assets/images/teamGenerator.png";
import employeeTracker from "../assets/images/eTracker.gif";
import soundThis from "../assets/images/sOUNDthis.png";

const projects = [
    {
        title: "Career Resources & Wiki",
        description: "A full-stack app that allows users to post and get resources about job fields of their choice.",
        imgUrl: careerWiki,
        githubUrl: "https://github.com/aroblesgalit/Project2",
        deployedUrl: "https://secure-shelf-77308.herokuapp.com/"
    },
    {
        title: "Password Generator",
        description: "A app that allows you to generate a password with special characters.",
        imgUrl: passwordGen,
        githubUrl: "https://github.com/DanielD10/HomeWork3",
        deployedUrl: " https://danield10.github.io/HomeWork3/"
    },
    {
        title: "SOUNDthis",
        description: "A React-based books search app that allows users to save books to review or purchase later.",
        imgUrl: soundThis,
        githubUrl: "https://github.com/Brian-Fairbanks/SoundThis",
        deployedUrl: "https://brian-fairbanks.github.io/SoundThis/"
    },
    {
        title: "Weather Dashboard",
        description: "A weather dashboard app that shows the current and future weather information of a city.",
        imgUrl: weatherDashboard,
        githubUrl: "https://github.com/DanielD10/Weather-DashBoard",
        deployedUrl: "https://danield10.github.io/Weather-DashBoard/"
    },
    {
        title: "Team Profile Generator",
        description: "A command-line interface app for dynamically generating a team profile html.",
        imgUrl: teamProfile,
        githubUrl: "https://github.com/DanielD10/Team-Profile-Generator"
    },
    {
        title: "Employee Tracker",
        description: "A command-line interface app for tracking employees within a company.",
        imgUrl: employeeTracker,
        githubUrl: "https://github.com/DanielD10/Employee-Tracker"
    }
];

export default {
    getProjects: function() {
        return new Promise(resolve => {
            resolve(projects);
        });
    }
};