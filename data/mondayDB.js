// Guidelines
// *. Save the entire board, dont handle mini-updates
// *. No need for saving an activities array per task, those activities are easily filtered from the board activities


var dbJSON = {
    "boards": [
        {
            "_id": "j23h5",
            "name": "Tasker Tutorial",
            "creator": {
                "_id": "2uk35b",
                "fullname": "Tair Bitan",
                "imgUrl": ""
            },
            "createdAt": 124254735,
            "desc": "Welcome To Your First Tasker Board",
            "members": [
                {
                    "_id": "2uk35b",
                    "fullname": "Tair Bitan",
                    "imgUrl": ""
                },
                {
                    "_id": "2h3j5b",
                    "fullname": "Amit Weiss",
                    "imgUrl": ""
                },
                {
                    "_id": "kj346",
                    "fullname": "Tamir Leshetz",
                    "imgUrl": ""
                }
            ],
            "groups": [
                {
                    "id": "ljkh325",
                    "name": "Hello Tasker",
                    "createdAt": 23757231,
                    "updatedAt": 234623543,
                    "color": "red",
                    "tasks": [
                        {
                            "id": "6785gjd",
                            "name": "Add, delete, customize and move groups easily on your board",
                            "tags": ["demo", "instructions", "tutorial"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2uk35b",
                                    "fullname": "Tair Bitan",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Complete",
                            "priority": "High",
                            "note": "Add notes to your task",
                            "dueDate": 1606820163000,
                            "comments": [
                                {
                                    "by": {
                                        "_id": "2uk35b",
                                        "fullname": "Tair Bitan",
                                        "imgUrl": ""
                                    },
                                    "text": "This is the task's chat"
                                },
                                {
                                    "by": {
                                        "_id": "2h3j5b",
                                        "fullname": "Amit Weiss",
                                        "imgUrl": ""
                                    },
                                    "text": "Here you can send comments, thoughts and updates about the task"
                                },
                                {
                                    "by": {
                                        "_id": "kj346",
                                        "fullname": "Tamir Leshetz",
                                        "imgUrl": ""
                                    },
                                    "text": "Or simply chat with the task members"
                                },
                            ]
                        },
                        {
                            "id": "4h45k7",
                            "name": "Invite team members",
                            "tags": ["demo", "instructions", "tutorial", "members"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Working on it",
                            "priority": "Medium",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": []
                        },
                        {
                            "id": "3kgr4f",
                            "name": "View Your Team Progress",
                            "tags": ["demo", "instructions", "tutorial", "progress"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "2uk35b",
                                    "fullname": "Tair Bitan",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "stuck",
                            "priority": "low",
                            "note": "Simply watch the progress bar beneath every group",
                            "dueDate": 1606820163000,
                            "comments": []
                        },
                        {
                            "id": "65kfk8",
                            "name": "Use Your Dashboard",
                            "tags": ["demo", "instructions", "tutorial", "dashboard"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "2uk35b",
                                    "fullname": "Tair Bitan",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Need to review",
                            "priority": "low",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": []
                        }
                    ]
                },
                {
                    "id": "0tt6nj",
                    "name": "Become A Tasker Master",
                    "createdAt": 23757231,
                    "updatedAt": 234623543,
                    "color": "green",
                    "tasks": [
                        {
                            "id": "OS45N5",
                            "name": "Quick search everyting",
                            "tags": ["demo", "instructions", "tutorial", "search"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Working on it",
                            "priority": "High",
                            "note": "Use the search feature",
                            "dueDate": 1606820163000,
                            "comments": []
                        },
                        {
                            "id": "Fdg667",
                            "name": "Check notifications",
                            "tags": ["demo", "instructions", "tutorial", "notifications"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2uk35b",
                                    "fullname": "Tair Bitan",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Stuck",
                            "priority": "Low",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": []
                        },
                        {
                            "id": "KF45G97",
                            "name": "Set Deadlines",
                            "tags": ["demo", "instructions", "tutorial", "deadlines"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Completed",
                            "priority": "High",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": []
                        }
                    ]
                },
                {
                    "id": "KJdr45",
                    "name": "Become A Tasker Master",
                    "createdAt": 23757231,
                    "updatedAt": 234623543,
                    "color": "green",
                    "tasks": [
                        {
                            "id": "OS45N5",
                            "name": "Quick search everyting",
                            "tags": ["demo", "instructions", "tutorial", "search"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Working on it",
                            "priority": "High",
                            "note": "Use the search feature",
                            "dueDate": 1606820163000,
                            "comments": []
                        },
                        {
                            "id": "Fdg667",
                            "name": "Check notifications",
                            "tags": ["demo", "instructions", "tutorial", "notifications"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2uk35b",
                                    "fullname": "Tair Bitan",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Stuck",
                            "priority": "Low",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": []
                        },
                        {
                            "id": "KF45G97",
                            "name": "Set Deadlines",
                            "tags": ["demo", "instructions", "tutorial", "deadlines"],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "2h3j5b",
                                    "fullname": "Amit Weiss",
                                    "imgUrl": ""
                                },
                                {
                                    "_id": "kj346",
                                    "fullname": "Tamir Leshetz",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "Completed",
                            "priority": "High",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": []
                        }
                    ]
                },
            ],
            "activities": [
                {
                    "id": "65k8bu",
                    "createdAt": 12243243,
                    "txt": "Tair created a new task",
                    "byUser": {
                        "_id": "2uk35b",
                        "fullname": "Tair Bitan",
                        "imgUrl": ""
                    },
                    "task": {
                        "id": "6785gjd",
                        "name": "Add, delete, customize and move groups easily on your board"
                    }
                },
                {
                    "id": "9g6md9",
                    "createdAt": 12243243,
                    "txt": "Amit commented on a task",
                    "byUser": {
                        "_id": "2h3j5b",
                        "fullname": "Amit Weiss",
                        "imgUrl": ""
                    },
                    "task": {
                        "id": "6785gjd",
                        "name": "Add, delete, customize and move groups easily on your board"
                    }
                },
                {
                    "id": "8ff55g",
                    "createdAt": 12243243,
                    "txt": "Tamir changed a task's status",
                    "byUser": {
                        "_id": "kj346",
                        "fullname": "Tamir Leshetz",
                        "imgUrl": ""
                    },
                    "task": {
                        "id": "4h45k7",
                        "name": "Invite team members"
                    }
                },
            ]
        }
    ],
    "user": {
        "_id": "",
        "isAdmin": true,
        "notifications": [
            {
                "byUser": {
                    "_id": "",
                    "fullname": "",
                    "imgUrl": ""
                },
                "content": "",
                "createdAt": 1606733792261
            }
        ],
        "fullname": "",
        "username": "",
        "email": "",
        "password": "",
        "phoneNumber": "",
        "birthday": "",
        "company": "",
        "score": "", //when user completes a task
        "createdAt": 1601297334426
    }
}