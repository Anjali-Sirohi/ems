const employees = [
    {
        "id": 1,
        "firstName": "Priyanka",
        "email": "p@p.com",
        "password": "123",
        "taskNumbers": {
            "acceptedTask": 2,
            "newTask": 0, // Set to 0
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "acceptedTask": true,
                "newTask": false, // Ensured it is true/false
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Complete project report",
                "taskDate": "2025-02-19",
                "category": "Work"
            },
            {
                "acceptedTask": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Fix bugs in app",
                "taskDate": "2025-02-15",
                "category": "Development"
            },
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 3",
                "taskDescription": "Attend client meeting",
                "taskDate": "2025-02-20",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Nikita",
        "email": "n@n.com",
        "password": "123",
        "taskNumbers": {
            "acceptedTask": 2,
            "newTask": 0, // Set to 0
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Write documentation",
                "taskDate": "2025-02-18",
                "category": "Work"
            },
            {
                "acceptedTask": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Review code",
                "taskDate": "2025-02-17",
                "category": "Review"
            },
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 3",
                "taskDescription": "Prepare presentation",
                "taskDate": "2025-02-21",
                "category": "Presentation"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Kajal",
        "email": "k@k.com",
        "password": "123",
        "taskNumbers": {
            "acceptedTask": 1,
            "newTask": 0, // Set to 0
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Test new feature",
                "taskDate": "2025-02-19",
                "category": "Testing"
            },
            {
                "acceptedTask": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Update database schema",
                "taskDate": "2025-02-16",
                "category": "Database"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Sneha",
        "email": "s@s.com",
        "password": "123",
        "taskNumbers": {
            "acceptedTask": 2,
            "newTask": 0, // Set to 0
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Design UI mockups",
                "taskDate": "2025-02-22",
                "category": "Design"
            },
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Conduct user research",
                "taskDate": "2025-02-23",
                "category": "Research"
            },
            {
                "acceptedTask": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 3",
                "taskDescription": "Develop new feature",
                "taskDate": "2025-02-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Lakhan",
        "email": "l@l.com",
        "password": "123",
        "taskNumbers": {
            "acceptedTask": 1,
            "newTask": 0, // Set to 0
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "acceptedTask": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Task 1",
                "taskDescription": "Optimize website performance",
                "taskDate": "2025-02-20",
                "category": "Performance"
            },
            {
                "acceptedTask": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 2",
                "taskDescription": "Fix security vulnerabilities",
                "taskDate": "2025-02-18",
                "category": "Security"
            },
            {
                "acceptedTask": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Task 3",
                "taskDescription": "Write API documentation",
                "taskDate": "2025-02-12",
                "category": "Documentation"
            }
        ]
    }
];

const admin = {
    "id": 1,
    "firstName": "Anjali",
    "email": "admin@example.com",
    "password": "123"
};

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};
setLocalStorage();

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
};
