const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/about', (req, res) => {

    const skills = ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node.js"];

    const education = [
        {
            degree: "BSC CS",
            level: "Bachelor",
            university: "North Maharashtra University, Jalgaon",
            cgpa: 9.28
        },
        {
            degree: "MCA",
            level: "Master",
            university: "AIU",
            cgpa: 7.26
        }
    ];

    const project = {
        projectName: "Jewellery Website",
        projectDetails:
            "A responsive jewellery website inspired by GIVA, built using HTML, CSS, Bootstrap, JavaScript, and React.",
        githubLink: "https://github.com/your-username/jewellery-website",
        liveLink: "https://your-project-name.vercel.app"
    };

    res.render('about.ejs', { skills, education, project });
});



app.get('/contact', (req, res) => {

    const personalDetails = {
        Name: "Jagruti Koli",
        Email: "jagrutikoli6201@gmail.com",
        contactNumber: 7666003900,
        Address: "Pune, Maharashtra"
    }

    const details = { data: personalDetails }
    res.render('contact.ejs', details)
})

const PORT = 5000
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
})