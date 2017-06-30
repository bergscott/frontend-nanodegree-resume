var placeholder = "%data%";

var bio = {
    "name": "Scott Berg",
    "role": "Web Developer",
    "contactInfo": {
        "email": "berg.scott@outlook.com",
        "mobile": "920-327-9452",
        "twitter": "@bergScott",
        "github": "bergscott",
        "location": "Green Bay, WI"
    },
    "pictureURL": "images/scott.jpg",
    "welcomeMessage": "Hi, I'm Scott and I'm learning to be a Web Developer!",
    "skills": ["HTML", "CSS", "JavaScript", "Python", "Java", "Ruby"]
};

var work = {};
work.position = "Electronics Technician";
work.employer = "University of Wisconsin-Green Bay";
work.yearsWorked = "2012-present";
work.city = "Green Bay, WI";

var education = {};
education["school"] = "University of Wisconsin-Madison";
education["years"] = "2005-2009";
education["city"] = "Madison, WI";


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
    HTMLschoolName.replace(placeholder, education.school),
    HTMLschoolDates.replace(placeholder, education.years),
    HTMLschoolLocation.replace(placeholder, education.city)
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
