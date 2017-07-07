var placeholder = "%data%";

var bio = {
    "name": "Scott Berg",
    "role": "Web Developer",
    "contactInfo": {
        "email": "berg.scott@outlook.com",
        "mobile": "920-555-5555",
        "twitter": "@bergScott",
        "github": "bergscott",
        "location": "Green Bay, WI"
    },
    "pictureURL": "images/scott.jpg",
    "welcomeMessage": "Hi, I'm Scott and I'm learning to be a Web Developer!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Python", "Java", "Ruby"]
};

var work = {
    "jobs": [
        {
            "employer": "Univeristy of Wisconsin-Green Bay",
            "title": "Electronics Technician",
            "dates": "2012-present",
            "location": "Green Bay, WI",
            "description": "Served as a classroom technology support technician, administrator of videoconferencing systems and equipment reservation software"
        },
        {
            "employer": "WBAY-TV",
            "title": "Newscast Director",
            "dates": "2010-2012",
            "location": "Green Bay, WI",
            "description": "Directed production crew and operated a video production switcher to produce live television newscasts. Lead programming of shot and transition templates for repeated use in newscasts."
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Responsive Birthday Wishlist",
            "dates": "June 2017",
            "description": "Fully responsive webpage containing a wish list for birthday gifts",
            "images": ["images/wishlist1.jpg", "images/wishlist2.jpg"]
        },
        {
            "title": "Guardian Feeder Android App",
            "dates": "December 2016-February 2017",
            "description": "Android App that searches for articles on theguardian.com using networked API requests",
            "images": ["images/guardian1.jpg", "images/guardian2.jpg"]
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "UW-Madison",
            "location": "Madison, WI",
            "degree": "Bachelor of Arts",
            "majors": ["Communication Arts"],
            "dates": "2005-2009",
            "url": "http://www.wisc.edu"
        }
    ],
    "onlineCourses": [
        {
            "name": "JavaScript Basics",
            "school": "Udacity",
            "dates": "June-July, 2017",
            "url": "http://www.udacity.com"
        },
        {
            "name": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "June 2017",
            "url": "http://www.udacity.com"
        },
        {
            "name": "Responsive Images",
            "school": "Udacity",
            "dates": "June 2017",
            "url": "http://www.udacity.com"
        },
        {
            "name": "Android Basics (4 Courses)",
            "school": "Udacity",
            "dates": "November 2016-March 2017",
            "url": "http://www.udacity.com"
        }
    ]
}

var formattedName = HTMLheaderName.replace(placeholder, bio.name);
var formattedRole = HTMLheaderRole.replace(placeholder, bio.role);
var formattedBioPic = HTMLbioPic.replace(placeholder, bio.pictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage);

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length != 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkill = HTMLskills.replace(placeholder, bio.skills[i]);
        console.log(formattedSkill);
        $("#skills").append(formattedSkill);
    }
}

work.jobs.forEach(function(job) {
    var formattedEmployer = HTMLworkEmployer.replace(placeholder, job.employer);
    var formattedJobTitle = HTMLworkTitle.replace(placeholder, job.title);
    var formattedJobDates = HTMLworkDates.replace(placeholder, job.dates);
    var formattedJobLocation = HTMLworkLocation.replace(placeholder, job.location);
    var formattedJobDescription = HTMLworkDescription.replace(placeholder, job.description);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer + formattedJobTitle);
    $(".work-entry:last").append(formattedJobDates);
    $(".work-entry:last").append(formattedJobLocation);
    $(".work-entry:last").append(formattedJobDescription);
});



/*   OLD CODE
var work = {};
work.position = "Electronics Technician";
work.employer = "University of Wisconsin-Green Bay";
work.yearsWorked = "2012-present";
work.city = "Green Bay, WI";

var educationUW = {};
educationUW["school"] = "University of Wisconsin-Madison";
educationUW["years"] = "2005-2009";
educationUW["city"] = "Madison, WI";

var formattedName = HTMLheaderName.replace(placeholder, bio.name);
var formattedRole = HTMLheaderRole.replace(placeholder, bio.role);

var formattedContacts = [
    HTMLmobile.replace(placeholder, bio.contactInfo.mobile),
    HTMLemail.replace(placeholder, bio.contactInfo.email),
    HTMLtwitter.replace(placeholder, bio.contactInfo.twitter),
    HTMLgithub.replace(placeholder, bio.contactInfo.github),
    HTMLlocation.replace(placeholder, bio.contactInfo.location)
];

var formattedBioPic = HTMLbioPic.replace(placeholder, bio.pictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage);
var formattedSkills = [];

var formattedUWGBinfo = [
    HTMLworkEmployer.replace(placeholder, work.employer) +
    HTMLworkTitle.replace(placeholder, work.position),
    HTMLworkDates.replace(placeholder, work.yearsWorked),
    HTMLworkLocation.replace(placeholder, work.city)
];

var formattedMadisonInfo = [
    HTMLschoolName.replace(placeholder, educationUW.school),
    HTMLschoolDates.replace(placeholder, educationUW.years),
    HTMLschoolLocation.replace(placeholder, educationUW.city)
];

for (var i = 0; i < bio.skills.length; i++) {
    formattedSkills[i] = HTMLskills.replace(placeholder, bio.skills[i]);
}

$("#header").prepend(HTMLskillsStart);
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

for (var i = 0; i < formattedContacts.length; i++) {
    $("#topContacts").append(formattedContacts[i]);
}

for (var i = 0; i < formattedSkills.length; i++) {
    $("#skills").append(formattedSkills[i]);
}

$("#workExperience").append(HTMLworkStart);

for (var i = 0; i < formattedUWGBinfo.length; i++) {
    $("#workExperience .work-entry").append(formattedUWGBinfo[i]);
}

$("#education").append(HTMLschoolStart);

for (var i = 0; i < formattedMadisonInfo.length; i++) {
    $("#education .education-entry:first-of-type").append(
        formattedMadisonInfo[i]);
}
*/