import profile_richard from './profile_richard.png'
import profile_alison from './profile_alison.png'
import profile_enrique from './profile_enrique.png'
import profile_marco from './profile_marco.png'
import profile_martin from './profile_martin.png'
import img1 from './img1.png'
export const assets = {
    profile_alison,
    profile_enrique,
    profile_marco,
    profile_martin,
    profile_richard
}

export default assets;

export const userDummyData = [
    {
        "_id": "680f50aaf",
        "email": "test1@greatstack.dev",
        "fullName": "Alison Martin",
        "profilePic": profile_alison,
        "bio": "Hi Everyone",
    },
    {
        "_id": "680f50e4f",
        "email": "test2@greatstack.dev",
        "fullName": "Martin Johnson",
        "profilePic": profile_martin,
        "bio": "Hi Everyone",
    },
    {
        "_id": "680f510af",
        "email": "test3@greatstack.dev",
        "fullName": "Enrique Martinez",
        "profilePic": profile_enrique,
        "bio": "Hi Everyone",
    },
    {
        "_id": "680f5137f",
        "email": "test4@greatstack.dev",
        "fullName": "Marco Jones",
        "profilePic": profile_marco,
        "bio": "Hi Everyone",
    },
    {
        "_id": "680f516cf",
        "email": "test5@greatstack.dev",
        "fullName": "Richard Smith",
        "profilePic": profile_richard,
        "bio": "Hi Everyone",
    }
]

export const messagesDummyData = [
    {
        "_id": "680f571ff",
        "senderId": "680f516cf",
        "receiverId": "680f50e4f",
        "text": "Lorem ipsum",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f",
        "senderId": "680f50e4f",
        "receiverId": "680f5116f",
        "text": "Lorem ipsum",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f",
        "senderId": "680f5116f",
        "receiverId": "680f50e4f",
        "text": "Lorem ipsum",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf",
        "senderId": "680f50e4f",
        "receiverId": "680f5116f",
        "text": "Lorem ipsum",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf",
        "senderId": "680f50e4f",
        "receiverId": "680f5116f",
        "image":img1,
        "text": "Look where i am",
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "680f5745f",
        "senderId": "680f5116f",
        "receiverId": "680f50e4f",
        "image":img1,
        "text": "Look where i am",
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "680f5748f",
        "senderId": "680f5116f",
        "receiverId": "680f50e4f",
        "text": "Lorem ipsum",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]
