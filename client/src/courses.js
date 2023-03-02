const courses = [
  {
    id: 1000,
    title: "COMP-1000: Key Concepts in Computer Science",
    description: "The objectives of this course are to excite students' interest in computer science and to give students a precise understanding of a number of difficult concepts that are fundamental to modern computer science. Topics may include: induction and recursion; algebraic characterization; syntax; semantics; formal logic; soundness, completeness, and decidability; specification, algorithm, and determinism; complexity. (Restricted to students registered in programs offered wholly or jointly by Computer Science or by Mathematics and Statistics, or with approval of Computer Science.) (3 lecture hours and 1.5 laboratory hours a week).",
    lectures:[
      {
          id: 1000,
          description: "Full&Winter&Summer",
      }
    ]
  },
  {
    id: 1047,
    title: "Computer Concepts for End-Users",
    description: "COMP-1047",
    lectures:[
      {
          id: 1047,
          description: "TBA",
      }
    ]
  },
  {
      id: 1400,
      title: "Intro to Programming and Algorithms I",
      description: "COMP-1400",
      lectures:[
        {
            id: 1400,
            description: "TBA",
        }
      ]

    },
    {
      id: 1410,
      title: "Intro to Programming and Algorithms II",
      description: "COMP-1410",
      lectures:[
        {
            id: 1410,
            description: "TBA",
        }
      ]

    },
    {
      id: 2057,
      title: "Intro to the Internet",
      description: "COMP-2057",
      lectures:[
        {
            id: 2057,
            description: "TBA",
        }
      ]

    },
    {
      id: 2067,
      title: "Programming for Beginners",
      description: "COMP-2067",

    },
    {
      id: 2077,
      title: "Problem Solving and Information on the Internet",
      description: "COMP-2077",

    },
    {
      id: 2097,
      title: "Social Media and Mobile Technology for End Users",
      description: "COMP-2097",

    },
    {
      id: 2120,
      title: "Object Oriented Programming Using Java",
      description: "COMP-2120",

    },
    {
      id: 2140,
      title: "Computer Languages, Grammars and Translators",
      description: "COMP-2140",

    },
    {
      id: 2310,
      title: "Theoretical Foundations of Computer Science",
      description: "COMP-2310",

    },
    {
      id: 2540,
      title: "Data Structures and Algorithms",
      description: "COMP-2540",

    },
    {
      id: 2560,
      title: "System Programming",
      description: "COMP-2560",

    },
    {
      id: 2650,
      title: "Computer Architecture I",
      description: "COMP-2650",

    },
    {
      id: 2660,
      title: "Computer Architecture II",
      description: "COMP-2660",

    },
    {
      id: 2707,
      title: "Advanced Website Design",
      description: "COMP-2707",

    },
    {
      id: 2750,
      title: "Selected Topics",
      description: "COMP-2750",

    },
    {
      id: 2800,
      title: "Software Development",
      description: "COMP-2800",

    },
    {
      id: 3057,
      title: "Cyber-Ethics",
      description: "COMP-3057",

    },
    {
      id: 3077,
      title: "Introduction to Software Engineering",
      description: "COMP-3077",

    },
    {
      id: 3150,
      title: "Database Management Systems",
      description: "COMP-3150",

    },
    {
      id: 3220,
      title: "Obj Oriented Software Analysis and Design",
      description: "COMP-3220",

    },
    {
      id: 3300,
      title: "Operating System Fundamentals",
      description: "COMP-3300",

    },
    {
      id: 3340,
      title: "WWW Information System Development",
      description: "COMP-3340",

    },
    {
      id: 3400,
      title: "Advanced Object Oriented System Design Using C++",
      description: "COMP-3400",

    },
    {
      id: 3500,
      title: "Introduction to Multimedia Systems",
      description: "COMP-3500",

    },
    {
      id: 3520,
      title: "Introduction to Computer Graphics",
      description: "COMP-3520",

    },
    {
      id: 3540,
      title: "Theory of Computation",
      description: "COMP-3540",

    },
    {
      id: 3670,
      title: "Computer Networks",
      description: "COMP-3670",

    },
    {
      id: 3680,
      title: "Network Practicum",
      description: "COMP-3680",

    },
    {
      id: 3710,
      title: "Artificial Intelligence Concepts",
      description: "COMP-3710",

    },
    {
      id: 3770,
      title: "Game Design, Development, and Tools",
      description: "COMP-3770",

    },
    {
      id: 4110,
      title: "Software Verification and Testing",
      description: "COMP-4110",

    },
    {
      id: 4150,
      title: "Advanced and Practical Database Systems",
      description: "COMP-4150",

    },
    {
      id: 4200,
      title: "Mobile Application Development",
      description: "COMP-4200",

    },
    {
      id: 4220,
      title: "Agile Software Development",
      description: "COMP-4220",

    },
    {
      id: 4250,
      title: "Big Data Analytics and Database Design",
      description: "COMP-4250",

    },
    {
      id: 4400,
      title: "Principles of Programming Languages",
      description: "COMP-4400",

    },
    {
      id: 4500,
      title: "3D Multimedia System Development",
      description: "COMP-4500",

    },
    {
      id: 4540,
      title: "Design and Analysis of Algorithms",
      description: "COMP-4540",

    },
    {
      id: 4670,
      title: "Network Security",
      description: "COMP-4670",

    },
    {
      id: 4680,
      title: "Advanced Networking",
      description: "COMP-4680",

    },
    {
      id: 4730,
      title: "Advanced Topics in AI I",
      description: "COMP-4730",

    },
    {
      id: 4740,
      title: "Advanced Topics in AI II",
      description: "COMP-4740",

    },
    {
      id: 4770,
      title: "Artifical Intelligence for Games",
      description: "COMP-4770",

    },
    {
      id: 4800,
      title: "Selected Topics in Software Engineering",
      description: "COMP-4800",

    },
    {
      id: 4960,
      title: "Research Project",
      description: "COMP-4960",

    },
    {
      id: 4990,
      title: "Project Management: Techniques and Tools",
      description: "COMP-4990",

    },
    {
      id: 1250,
      title: "Linear Algebra I",
      description: "MATH-1250",

    },
    {
      id: 1720,
      title: "Differential Calculus",
      description: "MATH-1720",

    },
    {
      id: 1730,
      title: "Integral Calculus",
      description: "MATH-1730",

    },
    {
      id: 3940,
      title: "Numerical Analysis for Computer Scientists",
      description: "MATH-3940",

    },
    {
      id: 2910,
      title: "Statistics for the Sciences",
      description: "STAT-2910",

    },
]

export default courses