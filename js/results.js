var education = angular.module("education", []);

    education.controller("educationController", 
		function educationController($scope) {
			// Array of my subjects and results added
			$scope.education = {
thirdYear: [
{
id: 1,
subject: "Work Placement",
grade: "Pass"
},
{
id: 2,
subject: "Project",
grade: "A"
},
{
id: 3,
subject: "Advanced Databases",
grade: "A"
},
{
id: 4,
subject: "Cloud Services",
grade: "B+"
},
{
id: 5,
subject: "Innovation",
grade: "B+"
},
{
id: 6,
subject: "Operation Systems",
grade: "A"
},
{
id: 7,
subject: "Web Design 2",
grade: "A"
},
{
id: 8,
subject: "Algorithms and Data Structures",
grade: "A"
					}
				]
			};
    });