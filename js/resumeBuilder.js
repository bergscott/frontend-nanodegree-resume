var placeholder = "%data%";

var formatElement = function(element, template) {
    return template.replace(placeholder, element);
};

var bio = {
    "name": "Scott Berg",
    "role": "Web Developer",
    "contacts": {
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

bio.display = function() {
    var formattedName = formatElement(bio.name, HTMLheaderName);
    var formattedRole = formatElement(bio.role, HTMLheaderRole);
    var formattedBioPic = formatElement(bio.pictureURL, HTMLbioPic);
    var formattedWelcome = formatElement(bio.welcomeMessage, HTMLwelcomeMsg);

    $("#header").prepend(formattedWelcome);
    $("#header").prepend(formattedBioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    if (bio.skills.length != 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(formatElement(bio.skills[i], HTMLskills));
        }
    }

    var formattedContacts = [];
    formattedContacts.push(formatElement(this.contacts.email, HTMLemail));
    formattedContacts.push(formatElement(this.contacts.mobile, HTMLmobile));
    formattedContacts.push(formatElement(this.contacts.twitter, HTMLtwitter));
    formattedContacts.push(formatElement(this.contacts.github, HTMLgithub));
    formattedContacts.push(formatElement(this.contacts.location, HTMLlocation));

    formattedContacts.forEach(function(contact) {
        $("#footerContacts").append(contact);
    });

};

bio.display();

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
            "description": "Directed production crew and operated a video production switcher to produce live television newscasts. Led programming of shot and transition templates for repeated use in newscasts."
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        var formattedEmployer = formatElement(job.employer, HTMLworkEmployer);
        var formattedJobTitle = formatElement(job.title, HTMLworkTitle);
        var formattedJobDates = formatElement(job.dates, HTMLworkDates);
        var formattedJobLocation = formatElement(job.location, HTMLworkLocation);
        var formattedJobDescription = formatElement(job.description, HTMLworkDescription);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedJobTitle);
        $(".work-entry:last").append(formattedJobDates);
        $(".work-entry:last").append(formattedJobLocation);
        $(".work-entry:last").append(formattedJobDescription);
    });
};

work.display();

var projects = {
    "projects": [
        {
            "title": "Responsive Birthday Wishlist",
            "dates": "June 2017",
            "description": "Fully responsive webpage containing a wish list for birthday gifts",
            "images": ["images/wishlist1.png", "images/wishlist2.png"]
        },
        {
            "title": "Guardian Feeder Android App",
            "dates": "December 2016-February 2017",
            "description": "Android App that searches for articles on theguardian.com using networked API requests",
            "images": ["images/guardian1.png", "images/guardian2.png"]
        }
    ]
};

projects.display = function() {

    this.projects.forEach(function(project) {

        var formattedProjectTitle = formatElement(project.title, HTMLprojectTitle);
        var formattedProjectDates = formatElement(project.dates, HTMLprojectDates);
        var formattedProjectDescription = formatElement(project.description,
            HTMLprojectDescription);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        project.images.forEach(function(image) {
            $(".project-entry:last").append(formatElement(image, HTMLprojectImage));
        });
    });
};

projects.display();

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
};

education.display = function() {
    this.schools.forEach(function(school) {
        var formattedName = formatElement(school.name, HTMLschoolName);
        var formattedDegree = formatElement(school.degree, HTMLschoolDegree);
        var formattedDates = formatElement(school.dates, HTMLschoolDates);
        var formattedLocation = formatElement(school.location, HTMLschoolLocation);
        var formattedMajors = formatElement(school.majors.join(", "), HTMLschoolMajor);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajors);
    });

    if (this.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            var formattedTitle = formatElement(course.name, HTMLonlineTitle);
            var formattedSchool = formatElement(course.school, HTMLonlineSchool);
            var formattedDates = formatElement(course.dates, HTMLonlineDates);
            var formattedURL = formatElement(course.url, HTMLonlineURL);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
        });
    }
};

education.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

var inName = function(name) {
    var splitName = name.trim().split(" ");
    return splitName[0].slice(0, 1).toUpperCase() +
        splitName[0].slice(1).toLowerCase() + " " +
        splitName[1].toUpperCase();
}

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