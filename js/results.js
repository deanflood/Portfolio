var results = angular.module("results", []);

results.controller("resultsController",
    function educationController($scope) {
        $scope.result = {

            thirdYear: {
                gpa: "3.86",
                resultList: [{
                    subjectName: "Work Placement",
                    grade: "Pass"
                }, {
                    subjectName: "Project",
                    grade: "A"
                }, {
                    subjectName: "Advanced Databases",
                    grade: "A"
                }, {
                    subjectName: "Cloud Services",
                    grade: "B+"
                }, {
                    subjectName: "Innovation",
                    grade: "B+"
                }, {
                    subjectName: "Operation Systems",
                    grade: "A"
                }, {
                    subjectName: "Web Design 2",
                    grade: "A"
                }, {
                    subjectName: "Algorithms and Data Structures",
                    grade: "A"
                }]
            },

            secondYear: {
                gpa: "4.00",
                resultList: [{
                    subjectName: "Information Security",
                    grade: "A"
                }, {
                    subjectName: "Analysis & Design",
                    grade: "A"
                }, {
                    subjectName: "Management Science",
                    grade: "A"
                }, {
                    subjectName: "Networking 1",
                    grade: "A"
                }, {
                    subjectName: "Networking 2",
                    grade: "A"
                }, {
                    subjectName: "Software Quality",
                    grade: "A"
                }, {
                    subjectName: "Project",
                    grade: "A"
                }, {
                    subjectName: "Web Design",
                    grade: "A"
                }, {
                    subjectName: "Discrete Maths 2",
                    grade: "A"
                }, {
                    subjectName: "Database 2",
                    grade: "A"
                }, {
                    subjectName: "Software Devlopment 3",
                    grade: "A"
                }, {
                    subjectName: "Software Development 4",
                    grade: "A"
                }]
            },

            firstYear: {
                gpa: "3.86",
                resultList: [{
                    subjectName: "Operating Systems",
                    grade: "A"
                }, {
                    subjectName: "Database Fundamentals",
                    grade: "A"
                }, {
                    subjectName: "Statistics",
                    grade: "A"
                }, {
                    subjectName: "System Analysis",
                    grade: "A"
                }, {
                    subjectName: "Software Development 1",
                    grade: "A"
                }, {
                    subjectName: "Software Development 2",
                    grade: "A"
                }, {
                    subjectName: "Discrete Maths",
                    grade: "A"
                }, {
                    subjectName: "Business Systems",
                    grade: "A"
                }, {
                    subjectName: "Interface Design",
                    grade: "B+"
                }, {
                    subjectName: "Social Media",
                    grade: "A"
                }, {
                    subjectName: "Learning to Learn",
                    grade: "B"
                }, {
                    subjectName: "Computer Architecture",
                    grade: "A"
                }]

            }
        }
    });
	
var skills = angular.module("skillset", []);

skills.controller("skillsController",
    function educationController($scope) {
        $scope.skills = 
			["JAVA", "C#", "C++", "HTML & CSS", "SQL", "REST APIs", "GITHUB", "UNIX CMD", "WINDOWS CMD", "JSON & XML", "JACKSON", "TESTING"]
	
	
	});
	
angular.bootstrap(document.getElementById("results"), ['results']);
