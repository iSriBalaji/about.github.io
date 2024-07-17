const data = {
    personal_details: {
        picture: "profile-pic.jpg",
        name: "Sri Balaji Muruganandam",
        github: "https://github.com/iSriBalaji",
        github_short: "iSriBalaji",
        linkedin: "https://www.linkedin.com/in/isribalaji",
        linkedin_short: "iSriBalaji",
        resume: "https://drive.google.com/file/d/1nNmoaVZfxJEq8D2ZGLdPY3N6tQLLwNY3/view?usp=drive_link",
        email: "contact[at]isribalaji[dot]in",   //"sribalaji0203[at]gmail[dot]com"
        location: "Buffalo, NY, USA",
        highest_codechef_rating: "0",
        description: [
            "» Passionate Engineer: Navigating the Intersection of Data, Software, and Problem Solving",
            "» A dedicated student on a continuous journey of learning in the realms of data engineering, machine learning and cloud",
            "» My world is constantly buzzing with engaging pursuits, from diving into startups events and creating personal frameworks to pursuing certifications, reading books, personal data projects, and more",
            "» Beyond my technical pursuits, I find joy in the pages of books, connecting with new people, lending a hand at startup events, and embracing walking and mindfulness as a daily practice",
            "___________________________________",
            "» FUN FACTs: I learned to skate in just two days, though I can't do tricks yet. I can solve a 3x3 Rubik's cube and I'm somewhat addicted to the chess.com app, having played over 4900 matches despite not being a master :) I use Duolingo daily to learn Spanish and know over 500 words feeling a little confident in beginner level reading. I also have an impressive streak of 750+ days on Duo.",
            "» Recently my teammates/friends introduced me to soccer and I quickly became a fan although cricket has always been my fav sport. I'm also passionate about Formula One for its incredible engineering, strategy, team effort, and driver training. I even visited the F1 Exhibition in Toronto where I saw the cars IRL and tried their simulation",
        ],
        highlights: [
            // "Data Engineering",
            "Google Cloud",
            "Python",
            "Leadership",
            "FastAPI",
            "BigQuery",
            "Airflow",
            "Cloud SQL",
            "Data Modelling",
            "Docker",
            "ETL",
            "Analytical Thinking"
        ]
    },
    experience: [
        {
            company: "Resultant",
            location: "Indiana, US",
            title: "Data Engineer II",
            start_date: "April, 2023",
            end_date: "Present",
            description: "Building a Data Vault 2.0 based data lakehouse and ETL pipelines on Google Cloud using CloudSQL, BigQuery, Python, and Airflow to improve the data infrastructure of the Colorado State Healthcare System (CDPHE). Orchestrated data pipelines with Airflow, defining dependencies across hub, satellite, and link tables to ensure seamless data flow.",
            logo: "logos/resultant.jpg"
        },
        {
            company: "Fellowship.ai",
            location: "Hawaii, US(Remote)",
            title: "Data Science Intern",
            start_date: "June, 2022",
            end_date: "August, 2022",
            description: "Developed a BERT-based Transformer Model for addressing Plant-Based Nutrition Inquiries, Drawing Insights from an Extensive Collection of 2500+ Videos, Blogs, and Podcasts, Coordinated a team of 8 by organizing daily scrums, managing, and reporting to manager",
            logo: "logos/fellowship.png"
        },
        {
            company: "Tata Consultancy Services (Digital)",
            location: "Chennai, India",
            title: "Data Engineer",
            start_date: "August, 2020",
            end_date: "July, 2021",
            description: "Established Robust ETL Data Pipelines on Cloud Data Fusion, Leveraging GCS as the Data Lake and BigQuery to build Enterprise Data Warehouse for Vodafone. The pipelines were instrumental in preparing data for comprehensive business analytics across Vodafone's operations in Hungary. The orchestration of these pipelines was seamlessly managed using Apache Airflow within Cloud Composer",
            logo: "logos/tcs.png"
        },
        {
            company: "KPMG",
            location: "Chennai, India(Remote)",
            title: "Data Analytics Virtual Internship",
            start_date: "June, 2020",
            end_date: "July, 2020",
            description: "Worked on a analytics project, spanning Data Cleansing, Exploration, Visualization, and Presentation, driven by three distinct modules",
            logo: "logos/kpmg.png"
        }
    ],
    education: [
        {
            institution: "University at Buffalo, SUNY",
            logo: "logos/ub.svg",
            type: "College",
            course: "Data Sciences and Applications",
            short_course: "Masters of Professional Studies",
            start_year: "2021",
            end_year: "2023",
            awards: [
                "Finalist of Buffalo Startup Weekend 2022",
                "Volunteered for BSW'22 and Startup Coffee",
                "Won 1st place in Code-to-give Hackathon conducted by Morgan Stanley",
                "Participated in UB Chess Club Sessions"
            ]
        },
        {
            institution: "Anna University",
            logo: "logos/annauniv.png",
            type: "College",
            course: "Electronics and Communication Engineering",
            short_course: "Bachelors of Engineering",
            start_year: "2016",
            end_year: "2020",
            awards: [
                "58th All India Rank in National Creativity Aptitude Test",
                "Winner of ”Design Your Destiny 2019” hardware hackathon among 5000 teams all over India",
                "Best Paper Award - International Conference on Research Advancements & Challenges in Engineering Sciences (ICRACE’20)",
                "Editor of Department Newsletter(2018 & 2019)",
            ]
        },
        {
            institution: "SRM University",
            logo: "logos/srm.png",
            type: "College",
            course: "Diploma in Yoga for Human Excellence",
            short_course: "Diploma",
            start_year: "2014",
            end_year: "2016",
            awards: [
                "Learned comprehensive practical and theoretical aspects of physical, mental, social, and spiritual well-being.",
                "Completed the diploma with first class distinction. Secured 3rd rank in the program that year.",
                "During high school, we follow a daily routine with 40 minutes of exercise and meditation as part of the curriculum.",
                "FUN FACT: I can legally be a yoga teacher/trainer"
            ]
        }
    ],
    courses: [
        {
            title: "Google Cloud Professional Database Engineer",
            provider: "Google Cloud",
            certificate_link: "https://google.accredible.com/34d44edc-b176-4896-9ddd-fd26ed017a1e"
        },
        {
            title: "Apache Airflow Fundamentals",
            provider: "Astronomer",
            certificate_link: "https://www.credly.com/badges/3ec6c1e6-4ff6-46e3-be4a-1a788801e94d/public_url"
        },
        {
            title: "Google Cloud Professional Data Engineer",
            provider: "Google Cloud",
            certificate_link: "https://www.credential.net/a9b6663f-8e2c-4d8f-93be-ae5609f82ba0"
        },
        {
            title: "Programming, Data Structures and Algorithms using Python",
            provider: "IIT Madras, NPTEL",
            certificate_link: "https://drive.google.com/file/d/1GZ-MoORM5luoOnqAOGDjlrz9vHkwpL2S/view?usp=share_link",
            description: ["Elite + Silver"]
        },
        {
            title: "AWS Certified Cloud Practitioner",
            provider: "Amazon Web Services",
            certificate_link: "https://www.credly.com/badges/e8ba50ba-d6cd-4244-b484-ad5cf0b6b650/public_url",
            description: ["Check my AWS CCP notes on github"]
        },
        {
            title: "Tensorflow Developer Certification",
            provider: "Google",
            description: ["In Progress"]
        },
        {
            title: "Docker for Beginner - Hands On - DevOps",
            provider: "Udemy",
            certificate_link: "https://drive.google.com/file/d/1H1T5jxyecUjHdUrjXwp8RJwT1sG-3sf6/view?usp=sharing"
        },
        {
            title: "Image Processing using Cloud",
            provider: "Techfest, IIT Bombay",
            certificate_link: "https://www.prismcode.in/certificate/?i=Tm1FeE5UaGpNV0V5WkRNMVlqWTJZbVk1TURrME16RTVaVEJrT1RReVpURXdOamhqWWpobU5TMVFRMVJKTWpVPQ==&s=WW1GbFpHSmtNVGRrTTJFeU9HWTRaV1psT0dRME9ETmlaamd3WW1ReVl6WTNZelV6TnpBek5pMDU="
        },
        {
            title: "Big Data with Apache Spark and Python",
            provider: "Udemy",
            certificate_link: "https://www.udemy.com/certificate/UC-d49103ce-a0bc-4a9e-a7d4-a7215fb9794d/"
        },
        {
            title: "Machine Learning",
            provider: "Andrew NG, Coursera"
        },
        {
            title: "Sentiment Analysis in Python",
            provider: "DataCamp",
            certificate_link: "https://www.datacamp.com/statement-of-accomplishment/course/fec52a7cde63ec651f9dbccba4a4c256e5dd3915"
        },
        {
            title: "Image Processing with Keras in Python",
            provider: "DataCamp",
            certificate_link: "https://www.datacamp.com/statement-of-accomplishment/course/1718dcc6e8a7b53361079851b4001b5c33503e16"
        },
        {
            title: "Introduction to Deep Learning in Python",
            provider: "DataCamp",
            certificate_link: "https://www.datacamp.com/statement-of-accomplishment/course/d6125bd3a99ec6dcf482d15bcd8840bb15752998"
        },
        {
            title: "Hadoop Linkedin Certification",
            provider: "Linkedin Learning Courses®",
            certificate_link: "https://drive.google.com/file/d/1HjcQU2fJWCQpoo4LDqRXfBteQa_jqAOK/view?usp=sharing"
        }
    ],
    projects: [
        {
            title: "Sentiment Analysis on Social Engagement Platform",
            description: ["Developed for Morgan Stanley - Code to give hackathon",
                            "Performs Sentiment analysis on users post using Natural Language Processing",
                        "Uses Google Analytics to measure user activity on the platform",
                    "SEO optimized application built on Django framework"],
            tools: [
                "Python",
                "Django",
                "Heroku",
                "Postgres",
                "NLP",
                "HTML/CSS/JS",
                "AWS S3"
            ],
            github: "https://github.com/iSriBalaji/Code-To-Give-Mavericks",
            check_out: "https://atlanta-mission.herokuapp.com/"
        },
        {
            title: "Clinicon - Medical Assistance for Rural People",
            description: ["Full stack desktop application to predict diseases with greatest likelihood without any human intervention",
                        "Uses Google Speech to Text API convert patients speech to text and eSpeak synthesizer to convert text to speech",
                        "Patent No: 202041009208 | Intellectual Property India"],
            tools: [
                "Python",
                "Firebase",
                "UI - tkinter",
                "Classification",
                "Raspberry Pi",
            ],
            github: "https://github.com/iSriBalaji/Clinicon-Medical-Assistant",
            check_out: "https://www.youtube.com/watch?v=pA6wOhfTQgU&ab_channel=VelammalItechECE"
        },
        {
            title: "911 – What & How Well Do They Serve",
            description: ["Performed EDA to analyze and visualize uncovered structure of the New York state’s 911 dataset",
                        "Modeled regression to predict response time of future crimes and classified incidents by logistic regression with accuracy of 83%",
                        ],
            tools: [
                "Python",
                "SQLite",
                "Regression",
                "Classification",
                "Data Visualization",
            ],
            github: "https://github.com/iSriBalaji/911-Analysis",
            check_out: "https://docs.google.com/document/d/1-IknBpRzrvBQYOJO4tJZJ7_5HUE7n4qZ0NDiaCdMbHA/edit"
        },
        {
            title: "WDD - Washer Dryer Detector",
            description: ["Building a hardware device along with software that can detect the status of washer and dryer using sensors, microprocessor",
                        "Planning to open source the product after its done; Currently building the API for the device and tested each sensors separately",
                        "Mentors for this Project: Genuinely grateful and thankful to Alex Kuksenko and Neil Kilpatrik for assisting in developing the project."
                        ],
            tools: [
                "Python",
                "FastAPI",
                "Rasperry Pi",
                "Sensors",
                "Docker",
                "Data Modelling",
                "Architecture",
                "Cloud Run"
            ],
             github: "https://github.com/iSriBalaji/wdd",
            // check_out: "https://docs.google.com/document/d/1-IknBpRzrvBQYOJO4tJZJ7_5HUE7n4qZ0NDiaCdMbHA/edit"
        },
        {
            title: "Content Moderation using AWS Rekognition, S3 and Lambda",
            description: ["Built a small web app where users can upload images that are loaded into an S3 Bucket.",
                            "When a new image is loaded into the S3 bucket, it triggers a lambda function to fetch it and send it to AWS Rekognition.",
                            "AWS Rekognition checks the image for any unsafe, offensive, or inappropriate content and provides the result.",
                            "This technique can be used in larger applications to enhance user experience or can be built as a separate API endpoint."
                        ],
            tools: [
                "HTML/CSS",
                "AWS Rekognition",
                "AWS S3",
                "AWS Lambda"
            ],
            github: "https://github.com/iSriBalaji/aws",
            // check_out: "https://docs.google.com/document/d/1-IknBpRzrvBQYOJO4tJZJ7_5HUE7n4qZ0NDiaCdMbHA/edit"
        },
        {
            title: "FastAPI Hands-on using User and Post Endpoints",
            description: ["As part of the udemy course learnt fastapi hands on with an example"
                        ],
            tools: [
                "Python",
                "FastAPI"
            ],
            github: "https://github.com/iSriBalaji/fastapi/tree/main",
            // check_out: "https://docs.google.com/document/d/1-IknBpRzrvBQYOJO4tJZJ7_5HUE7n4qZ0NDiaCdMbHA/edit"
        },
        {
            title: "Alert roommates on important dates and events using Email Client",
            description: ["Reading a spreadsheet as source, process the file and send email to roommates with important bill dates, weather and events",
                            "Emails can be configured to have HTML template",
                            "Configured github actions to sync main branch to the EC2 instance - check workflows/main.yml",
                            "Need more updation - Still many features are in idea stage"
                        ],
            tools: [
                "Python",
                "Zoho Email Client",
                "AWS EC2",
                "CRON"
            ],
            github: "https://github.com/iSriBalaji/fastapi/tree/main",
            // check_out: "https://docs.google.com/document/d/1-IknBpRzrvBQYOJO4tJZJ7_5HUE7n4qZ0NDiaCdMbHA/edit"
        },
        {
            title: "Clustering and Visualization of Social Media Content Posts using NLTK",
            description: ["Cleaned the data to format and validate the columns; Created Bag of words and embedded it",
                            "Clustered the data using K means clustering model and evluated it using silhouette score and Elbow method",
                            "Created a Tableau Dashboard to visualize all the source data to know the trends and insights - Check Dashboard PDF on github"
                        ],
            tools: [
                "Natural Language Processing",
                "K Means Clustering",
                "Tableau",
                "Python",
                "Data Analysis"
            ],
            github: "https://github.com/iSriBalaji/Twitter-and-Facebook-post-clustering",
            check_out: "https://www.kaggle.com/code/isribalaji/intern-k-means/notebook"
        },
        {
            title: "Flutter Dice App",
            description: ["Built an android and iOS app that simulates the dual dice when both the dice has the same number it will send a notification",
                            "Learned this as part of Angela Flutter Course; Built it from scratch and added my own features"
                        ],
            tools: [
                "Flutter",
                "Dart",
            ],
            github: "https://github.com/iSriBalaji/Square-Dice",
            check_out: "APK link here"
        },
        {
            title: "Know Earth - Flutter Quiz App",
            description: ["An Android and iOS quiz app with questions about facts on Earth",
                            "When users selects the answer it will create the correct and incorrect symbol at the bottom"
                        ],
            tools: [
                "Flutter",
                "Dart",
            ],
            github: "https://github.com/iSriBalaji/Flutter_Quiz",
            check_out: "APK link here"
        },
        {
            title: "Scraping and organizing Solar Installer Companies Data",
            description: ["Automated the process of scraping company details who install solar panels all over the world",
                            "Learned web scraping from Corey youtube channel"
                        ],
            tools: [
                "Python",
                "Web Scraping",
            ],
            github: "https://github.com/iSriBalaji/WebScrapting-BeautifulSoup",
            // check_out: ""
        },
        {
            title: "Scraping and organizing Solar Installer Companies Data",
            description: ["Automated the process of scraping company details who install solar panels all over the world",
                            "Learned web scraping from Corey youtube channel",
                            "Also tried IP routing to change the IP address in case the site blocks bots"
                        ],
            tools: [
                "Python",
                "Web Scraping",
            ],
            github: "https://github.com/iSriBalaji/WebScrapting-BeautifulSoup",
            // check_out: ""
        },
        {
            title: "Registration Form integrated with Firebase hosted on Github Pages",
            description: ["Created this web form for my friends workshop registration page",
                            "It stores all the student data in Google Firebase real time database"
                        ],
            tools: [
                "HTML",
                "CSS",
                "JS",
                "Firebase"
            ],
            github: "https://github.com/iSriBalaji/Firebase_Form",
            // check_out: ""
        },
        {
            title: "Image Viewer Desktop App with Python Tkinter",
            description: ["Built a desktop application with python Tkinter UI framework",
                            "Opens the image in the folder and can be scrolled front and back"
                        ],
            tools: [
                "Python",
                "Tkinter",
                "UI Design"
            ],
            github: "https://github.com/iSriBalaji/Python-Image_Viewer",
            // check_out: ""
        },
        {
            title: "CalX - Calculator Desktop App with Python Tkinter",
            description: ["Built my own design of calculator app with Python Tkinter",
                            "Designed the UI with Tkinter widgets and the app does basic arithmetic operations"
                        ],
            tools: [
                "Python",
                "Tkinter",
                "UI Design"
            ],
            github: "https://github.com/iSriBalaji/Python-tkinter-Calculator",
            // check_out: ""
        },
        {
            title: "Dazzit - Static Web Page from Scratch",
            description: ["Built a static web page with HTML and CSS when learning it"
                        ],
            tools: [
                "HTML",
                "CSS"
            ],
            github: "https://github.com/iSriBalaji/Dazzit",
            // check_out: ""
        },
        {
            title: "For other mini projects please check my github",
            description: [
                        ],
            tools: [
            ],
            github: "https://github.com/iSriBalaji",
            // check_out: ""
        },
    ],
    contact: [
                {
                    label: "Calendly Link"
                }
    ],
    books: [
        {
            name: "How I Braved Anu Aunty and Co-Founded A Million Dollar Company",
            role: "2015",
            logo: "logos/hb.jpg",
            description: [
                "My first book I completed - During my 5th semester of undergrad, I made the most of my time on the school bus reading/completing this book"
            ]
        },
        {
            name: "Trailblazer: The Power of Business as the Greatest Platform for Change",
            role: "2022", //October
            logo: "logos/trail.jpg",
            description: [
                "This book taught me how companies can succeed by caring for their employees, customers, and communities, not just by focusing on profits.", "Mr. Benioff specifically shares how adopting ethical practices, fostering innovation, giving back through philanthropy (1:1:1 principle), and strong leadership can drive both business growth and positive change in society."
            ]
        },
        {
            name: "The Happiest Man on Earth: The Beautiful Life of an Auschwitz Survivor",
            role: "2022", //October
            logo: "logos/happy.jpg",
            description: [
                "After reading this book, I realized how incredibly strong and resilient people can be. It made me more thankful for my own life."
            ]
        },
        {
            name: "Awareness",
            role: "2022", //November
            logo: "logos/awareness.jpg",
            description: [
                "This book was really a transformative experience. It made me reconsider certain things about religion and the meaning of spirituality. It also helped me realize many things personally"
            ]
        },
        {
            name: "The Subtle Art of Not Giving a F*ck",
            role: "2022", //December
            logo: "logos/subtle.jpg",
            description: ["It thought the importance of accepting our limitations; choosing our values wisely; caring less about unimportant things", "This also made me feel like the majority of productivity books directly or indirectly means the same set of ideas."]
        },
        {
            name: "A Man Called Ove",
            role: "2022", //December,
            description: ["A sweet story about a regular guy who might seem grumpy but is actually very kind and caring. It shows us how important it is to stay close to others. Even when we lose someone we love, we can find love again in a new and unexpected ways!", "I also watched the movie that was released based on this book just a few months after reading it."],
            logo: "logos/ove.jpg",
        },
        {
            name: "Approaching (Almost) Any Machine Learning Problem",
            role: "2022", //January
            logo: "logos/AAAMLP.jpg",
            description: ["Tech Book - Find my notes on the book on github"]
        },
        {
            name: "Building a Scalable Data Warehouse with Data Vault 2.0",
            role: "2024", //July,
            logo: "logos/DV.jpg",
            description: ["Tech Book - Read and took notes upto Chapter 6"]
        },
        {
            name: "The Trusted Advisor",
            role: "2024", //July,
            logo: "logos/trusted_advisor.jpg",
            description: ["Currently reading"]
        }
    ],
    skills: [
        {
            title: "Tools and Technologies",
            //list: ["Python", "Octave", "C", "Linux(Debian based)", "Git", "Github Actions", "Tableau", "Jenkins", "Jira", "Confluence", "SharePoint", "Machine Learning"]
            list: ["Python", "Linux(Debian based)", "FastAPI", "Docker", "Rasperry Pi", "git", "Github Actions", "Tableau", "Jira", "Confluence", "SharePoint", "Flutter", "Django", "System Design(Learning)"]

        },
        {
            title: "Data Engineering",
            list: ["Airflow", "Shell Scripting", "AWS EMR", "Oracle SQL", "PL/SQL", "ETL", "SQL Server", "Postgres", "Apache Spark(Scripting, SQL)", "Data Architecture(Beginner level)"]
        },
        {
            title: "Data Science & ML",
            list: ["tensorflow", "keras", "scikit-learn", "pandas", "numpy", "CNN", "NLP", "Data Preprocessing", " Data Visualization", "ML Models(Supervised)"]
        },
        {
            title: "Cloud Products",
            list: ["Google Cloud Storage", "Cloud Functions", "Cloud SQL", "Secret Manager", "Cloud Spanner", "Data Fusion", "BigQuery", "Composer(Airflow)", "Dataproc", "S3", "EC2", "Lambda", "Cloud Logs"]
        }
    ],
    programming_achievements: [
        {
            title: "All India Rank 58 in National Creative Aptitude Test(NCAT)",
            description: "The NCAT is designed to sensitize the students to the domain of creative thinking and motivate them to read, learn and practice the same.",
            date: "2019"
        },
        {
            title: "Winner - Code to Give Hackathon (Morgan Stanley)",
            description: "Designed and implemented a comprehensive, SEO-optimized full-stack social engagement platform, fostering meaningful connections between Atlanta Mission's stakeholders and clients, resulting in a commendation and a $500 prize",
            date: "2022"
        },
        {
            title: "Finalist - Smart India Hackathon 2020",
            description: "Advanced to the finals(top 5) of the prestigious Smart India Hackathon conducted by the government of India amoung thousands of teams",
            date: "2020"
        },
        {
            title: "Best Paper Award - International Conference on Research Advancements & Challenges in Engineering Sciences (ICRACE'20)",
            description: "Honored with the Best Paper Award for delivering a presentation featuring a prototype for Women's Social Security along with mobile app simulations",
            date: "2020"
        },
        {
            title: "Applied for Patent for a Medical device(CLINICON)| Patent No: 202041009208",
            description: "CLINICON, a versatile medical assistant, is deployable either all over the street corners or tailored for specific regions. It simplifies healthcare access by converting voice inputs into text, providing symptom guidance in the patient's native language, and generating prescriptions and dosage instructions via an integrated printer.",
            date: "2019"
        },
        {
            title: "Winner of Design Your Destiny'2019 (Electrical Stream)",
            description: "Won first place in a nationwide hardware hackathon, surpassing 5000 participating teams through a rigorous three-month process of presentations and demos, earning recognition and a $500 prize",
            date: "2019"
        },
        {
            title: "Finalist of Buffalo Startup Weekend 2022 and volunteering for Startup Week & Startup Coffee",
            date: "2022"
        },
        {
            title: "Won in 5 Project fests and 7 Paper presentations across India",
            description: "Notable events: Ozmenta 2K19, Kratos'19, Innovation Geeks'19, Upagraha'18, etc..",
            date: "2017-2020"
        },
        {
            title: "Volunteering at the Tools Library",
            description: "Assisting Tools Library teams in tree planting and grass cleanup efforts in Buffalo, enables me to support community projects and contribute to enhancing our local environment. Fun Fact: the apple tree you see outside of 2626 Main Street, Buffalo was planted by me!",
            date: "2024"
        }
    ],
    
}

export default data;