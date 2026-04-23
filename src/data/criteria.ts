import { Criterion } from '../types';

export const NBA_CRITERIA: Criterion[] = [
  {
    id: 1,
    title: "Vision, Mission and PEOs",
    maxMarks: 50,
    subCriteria: [
      {
        id: "1.1",
        title: "State the Vision and Mission of the Department and Institute",
        maxMarks: 5,
        description: "Availability of Vision and Mission statements",
        guidelines: [
          { id: "1.1.1", text: "Vision statement", points: 2 },
          { id: "1.1.2", text: "Mission statement", points: 3 }
        ]
      },
      {
        id: "1.2",
        title: "State the Program Educational Objectives (PEOs)",
        maxMarks: 5,
        description: "Availability and appropriateness of PEOs",
        guidelines: [
          { id: "1.2.1", text: "PEOs statement", points: 5 }
        ]
      },
      {
        id: "1.3",
        title: "Indicate where the Vision, Mission and PEOs are published and disseminated",
        maxMarks: 10,
        description: "Publication and dissemination among stakeholders",
        guidelines: [
          { id: "1.3.1", text: "Internal stakeholders", points: 5 },
          { id: "1.3.2", text: "External stakeholders", points: 5 }
        ]
      },
      {
        id: "1.4",
        title: "Process for defining the Vision and Mission of the Department, and PEOs of the program",
        maxMarks: 15,
        description: "Process and involvement of stakeholders",
        guidelines: [
          { id: "1.4.1", text: "Process for Vision & Mission", points: 7 },
          { id: "1.4.2", text: "Process for PEOs", points: 8 }
        ]
      },
      {
        id: "1.5",
        title: "Establish consistency of PEOs with Mission of the Department",
        maxMarks: 15,
        description: "Mapping and justification of PEOs with Mission",
        guidelines: [
          { id: "1.5.1", text: "Mapping matrix", points: 5 },
          { id: "1.5.2", text: "Justification", points: 10 }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Program Curriculum and Teaching-Learning Processes",
    maxMarks: 100,
    subCriteria: [
      {
        id: "2.1",
        title: "Program Curriculum",
        maxMarks: 20,
        description: "Structure and components of curriculum",
        guidelines: [
          { id: "2.1.1", text: "Curriculum structure", points: 10 },
          { id: "2.1.2", text: "State of the art", points: 10 }
        ]
      },
      {
        id: "2.2",
        title: "Teaching-Learning Processes",
        maxMarks: 80,
        description: "Quality of teaching and learning",
        guidelines: [
          { id: "2.2.1", text: "Initiatives", points: 20 },
          { id: "2.2.2", text: "ICT usage", points: 20 },
          { id: "2.2.3", text: "Mentoring", points: 20 },
          { id: "2.2.4", text: "Feedback", points: 20 }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Course Outcomes and Program Outcomes",
    maxMarks: 175,
    subCriteria: [
      {
        id: "3.1",
        title: "Establish the correlation between the courses and the POs & PSOs",
        maxMarks: 20,
        description: "Mapping of COs with POs and PSOs",
        guidelines: [
          { id: "3.1.1", text: "Mapping quality", points: 10 },
          { id: "3.1.2", text: "Justification", points: 10 }
        ]
      },
      {
        id: "3.2",
        title: "Attainment of Course Outcomes",
        maxMarks: 50,
        description: "Process and results of CO attainment",
        guidelines: [
          { id: "3.2.1", text: "Process", points: 20 },
          { id: "3.2.2", text: "Results", points: 30 }
        ]
      },
      {
        id: "3.3",
        title: "Attainment of Program Outcomes and Program Specific Outcomes",
        maxMarks: 105,
        description: "Direct and indirect attainment of POs/PSOs",
        guidelines: [
          { id: "3.3.1", text: "Direct assessment", points: 75 },
          { id: "3.3.2", text: "Indirect assessment", points: 30 }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Students' Performance",
    maxMarks: 100,
    subCriteria: [
      {
        id: "4.1",
        title: "Enrolment Ratio",
        maxMarks: 20,
        description: "Ratio of students enrolled vs sanctioned intake",
        guidelines: [
          { id: "4.1.1", text: ">= 90% enrolment", points: 20 },
          { id: "4.1.2", text: ">= 80% enrolment (alternative)", points: 18 },
          { id: "4.1.3", text: ">= 70% enrolment (alternative)", points: 16 }
        ]
      },
      {
        id: "4.2",
        title: "Success Rate in the stipulated period of the program",
        maxMarks: 40,
        description: "Students graduating without backlogs",
        guidelines: [
          { id: "4.2.1", text: "Success index", points: 40 }
        ]
      },
      {
        id: "4.3",
        title: "Academic Performance in Third Year",
        maxMarks: 15,
        description: "Average CGPA of students in 3rd year",
        guidelines: [
          { id: "4.3.1", text: "Performance index", points: 15 }
        ]
      },
      {
        id: "4.4",
        title: "Academic Performance in Second Year",
        maxMarks: 15,
        description: "Average CGPA of students in 2nd year",
        guidelines: [
          { id: "4.4.1", text: "Performance index", points: 15 }
        ]
      },
      {
        id: "4.5",
        title: "Placement, Higher Studies and Entrepreneurship",
        maxMarks: 10,
        description: "Success in career progression",
        guidelines: [
          { id: "4.5.1", text: "Placement index", points: 10 }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Faculty Information and Contributions",
    maxMarks: 200,
    subCriteria: [
      {
        id: "5.1",
        title: "Student-Faculty Ratio (SFR)",
        maxMarks: 20,
        description: "Ratio of students to faculty members",
        guidelines: [
          { id: "5.1.1", text: "SFR <= 15", points: 20 },
          { id: "5.1.2", text: "SFR <= 20 (alternative)", points: 15 }
        ]
      },
      {
        id: "5.2",
        title: "Faculty Cadre Proportion",
        maxMarks: 25,
        description: "Proportion of Professors, Assoc. Professors, Asst. Professors",
        guidelines: [
          { id: "5.2.1", text: "Cadre index", points: 25 }
        ]
      },
      {
        id: "5.3",
        title: "Faculty Qualification",
        maxMarks: 25,
        description: "Proportion of faculty with PhD",
        guidelines: [
          { id: "5.3.1", text: "Qualification index", points: 25 }
        ]
      },
      {
        id: "5.4",
        title: "Faculty Retention",
        maxMarks: 25,
        description: "Stability of faculty in the department",
        guidelines: [
          { id: "5.4.1", text: ">= 90% retention", points: 25 },
          { id: "5.4.2", text: ">= 75% retention (alternative)", points: 20 }
        ]
      },
      {
        id: "5.5",
        title: "Faculty Research and Development",
        maxMarks: 75,
        description: "Publications, R&D projects, Consultancy",
        guidelines: [
          { id: "5.5.1", text: "Publications", points: 25 },
          { id: "5.5.2", text: "Projects", points: 25 },
          { id: "5.5.3", text: "Consultancy", points: 25 }
        ]
      },
      {
        id: "5.6",
        title: "Faculty Performance Appraisal and Development System",
        maxMarks: 30,
        description: "Effectiveness of appraisal system",
        guidelines: [
          { id: "5.6.1", text: "Appraisal system", points: 30 }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Facilities and Technical Support",
    maxMarks: 80,
    subCriteria: [
      {
        id: "6.1",
        title: "Adequate and well-equipped laboratories",
        maxMarks: 30,
        description: "Lab infrastructure and equipment",
        guidelines: [
          { id: "6.1.1", text: "Equipment", points: 15 },
          { id: "6.1.2", text: "Utilization", points: 15 }
        ]
      },
      {
        id: "6.2",
        title: "Additional facilities created for improving the quality of learning",
        maxMarks: 20,
        description: "Beyond syllabus facilities",
        guidelines: [
          { id: "6.2.1", text: "Extra labs", points: 10 },
          { id: "6.2.2", text: "Skill centers", points: 10 }
        ]
      },
      {
        id: "6.3",
        title: "Laboratories: Maintenance and overall ambiance",
        maxMarks: 10,
        description: "Cleanliness and maintenance",
        guidelines: [
          { id: "6.3.1", text: "Ambiance", points: 10 }
        ]
      },
      {
        id: "6.4",
        title: "Project laboratory",
        maxMarks: 5,
        description: "Dedicated lab for student projects",
        guidelines: [
          { id: "6.4.1", text: "Project lab", points: 5 }
        ]
      },
      {
        id: "6.5",
        title: "Safety measures in laboratories",
        maxMarks: 15,
        description: "Safety protocols and equipment",
        guidelines: [
          { id: "6.5.1", text: "Safety measures", points: 15 }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Continuous Improvement",
    maxMarks: 50,
    subCriteria: [
      {
        id: "7.1",
        title: "Actions taken based on the results of evaluation of each of the POs & PSOs",
        maxMarks: 20,
        description: "Improvement actions based on attainment",
        guidelines: [
          { id: "7.1.1", text: "PO attainment actions", points: 20 }
        ]
      },
      {
        id: "7.2",
        title: "Academic Audit and actions taken thereof during the period of Assessment",
        maxMarks: 10,
        description: "Internal and external audits",
        guidelines: [
          { id: "7.2.1", text: "Audit process", points: 10 }
        ]
      },
      {
        id: "7.3",
        title: "Improvement in Placement, Higher Studies and Entrepreneurship",
        maxMarks: 10,
        description: "Trends in career progression",
        guidelines: [
          { id: "7.3.1", text: "Improvement trend", points: 10 }
        ]
      },
      {
        id: "7.4",
        title: "Improvement in the quality of students admitted to the program",
        maxMarks: 10,
        description: "Student intake quality trends",
        guidelines: [
          { id: "7.4.1", text: "Intake quality", points: 10 }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "First Year Academics",
    maxMarks: 50,
    subCriteria: [
      {
        id: "8.1",
        title: "First Year Student-Faculty Ratio (FYSFR)",
        maxMarks: 5,
        description: "Ratio in first year",
        guidelines: [
          { id: "8.1.1", text: "FYSFR index", points: 5 }
        ]
      },
      {
        id: "8.2",
        title: "Qualification of Faculty Teaching First Year Common Courses",
        maxMarks: 5,
        description: "PhD proportion in FY faculty",
        guidelines: [
          { id: "8.2.1", text: "Qualification index", points: 5 }
        ]
      },
      {
        id: "8.3",
        title: "First Year Academic Performance",
        maxMarks: 10,
        description: "Average performance in FY",
        guidelines: [
          { id: "8.3.1", text: "Performance index", points: 10 }
        ]
      },
      {
        id: "8.4",
        title: "Attainment of Course Outcomes of first year courses",
        maxMarks: 30,
        description: "CO attainment in FY",
        guidelines: [
          { id: "8.4.1", text: "Process", points: 10 },
          { id: "8.4.2", text: "Results", points: 20 }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Student Support Systems",
    maxMarks: 50,
    subCriteria: [
      {
        id: "9.1",
        title: "Mentoring system to help at individual level",
        maxMarks: 5,
        description: "Effectiveness of mentoring",
        guidelines: [
          { id: "9.1.1", text: "Mentoring system", points: 5 }
        ]
      },
      {
        id: "9.2",
        title: "Feedback analysis and reward / corrective measures taken",
        maxMarks: 10,
        description: "Student feedback loop",
        guidelines: [
          { id: "9.2.1", text: "Feedback process", points: 10 }
        ]
      },
      {
        id: "9.3",
        title: "Feedback on facilities",
        maxMarks: 5,
        description: "Student satisfaction with facilities",
        guidelines: [
          { id: "9.3.1", text: "Facility feedback", points: 5 }
        ]
      },
      {
        id: "9.4",
        title: "Self-Learning",
        maxMarks: 10,
        description: "Scope for self-learning activities",
        guidelines: [
          { id: "9.4.1", text: "Self-learning scope", points: 10 }
        ]
      },
      {
        id: "9.5",
        title: "Career Guidance, Training, Placement",
        maxMarks: 10,
        description: "Support for career development",
        guidelines: [
          { id: "9.5.1", text: "Career support", points: 10 }
        ]
      },
      {
        id: "9.6",
        title: "Entrepreneurship Cell",
        maxMarks: 5,
        description: "Support for entrepreneurship",
        guidelines: [
          { id: "9.6.1", text: "E-Cell activities", points: 5 }
        ]
      },
      {
        id: "9.7",
        title: "Co-curricular and Extra-curricular Activities",
        maxMarks: 5,
        description: "Student engagement beyond academics",
        guidelines: [
          { id: "9.7.1", text: "Activities", points: 5 }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Governance, Institutional Support and Financial Resources",
    maxMarks: 145,
    subCriteria: [
      {
        id: "10.1",
        title: "Organization, Governance and Transparency",
        maxMarks: 40,
        description: "Effectiveness of governance and transparency",
        guidelines: [
          { id: "10.1.1", text: "Governing body", points: 20 },
          { id: "10.1.2", text: "Transparency", points: 20 }
        ]
      },
      {
        id: "10.2",
        title: "Budget Allocation, Utilization and Public Accounting at Institute level",
        maxMarks: 30,
        description: "Financial management at institute level",
        guidelines: [
          { id: "10.2.1", text: "Budget allocation", points: 15 },
          { id: "10.2.2", text: "Utilization", points: 15 }
        ]
      },
      {
        id: "10.3",
        title: "Program Specific Budget Allocation, Utilization",
        maxMarks: 30,
        description: "Financial management at program level",
        guidelines: [
          { id: "10.3.1", text: "Department budget", points: 30 }
        ]
      },
      {
        id: "10.4",
        title: "Library and Internet",
        maxMarks: 20,
        description: "Adequacy of library and internet facilities",
        guidelines: [
          { id: "10.4.1", text: "Library", points: 10 },
          { id: "10.4.2", text: "Internet", points: 10 }
        ]
      },
      {
        id: "10.5",
        title: "Institutional Facilities",
        maxMarks: 25,
        description: "Adequacy of support facilities",
        guidelines: [
          { id: "10.5.1", text: "Support facilities", points: 25 }
        ]
      }
    ]
  }
];
