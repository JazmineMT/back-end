# Welcome to Fitness-Anywhere API

You can find the Deployed API at -> https://fitness-anywhere-jazmine.herokuapp.com


## Project Overview

This project was focused on designing a application that would support a gym with providing a databse to create users as either a client or instructor. Clients will have the ability to view classes and save them tho their profile. Instructors can view classes, create classes, upadate and delete classes. 


### userTypes table 

| Name            | Type       | Required | Description                                                      |
| -----------     | ---------- | -------- | -----------------------------------------------------------------|
| type_name       | string     | Yes      | records type of user (client or instructor)                      |
| authCodeForUser | String     | Yes      | records if user is client or instructor( 1= client ,2=instrucor )|
| id              | increments | Yes      | records the number of the entreys                                |


### intensityLevels table 

| Name        | Type       | Required | Description                                          |
| ----------- | ---------- | -------- | -----------------------------------------------------|
|      id     | increments | Yes      | records the number of the entreys                    |
| level_name  | String     | Yes      | stores intensity levels for classes                  |



### users table 

| Name        | Type       | Required | Description                                                                   |
| ----------- | ---------- | -------- | ------------------------------------------------------------------------------|
| username    | string     | Yes      | records the user's username                                                   |
| password    | String     | Yes      | records the user's password                                                   |
| name        | String     | No       | records the user's name                                                       |
| email       | String     | No       | records the user's email                                                      |
| authCode    | String     | No       | uses foriegn key to connect code with user type( 1= client , 2 = Instructor) |



### classes table 

| Name             | Type       | Required | Description                                                                                                          |
| -----------      | ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------|
| name             | increments | Yes      | records the class name                                                                                               |
| type             | String     | Yes      | records type of class ( body-weight, yoga, ect)                                                                      |
| classStart       | String     | Yes      | records when class begins                                                                                            |
| classEnd         | String     | Yes      | records when class ends                                                                                              |
| duration         | String     | Yes      | records how long the class lasts                                                                                     |
| intensityLevel   | Integer    | Yes      | Uses foriegn key to connect to intensity level with intensity level name(1=Beginninger, 2= Intermediate, 3= Advanced)|
| location         | String     | Yes      | records location of the class                                                                                        |
| currentRegistered| varchar    | Yes      | records how many registered in the class                                                                             |
| maxClassSize     | date       | Yes      | records the max clients class can have                                                                               |
| Instructor       | float      | Yes      | records name of instructor                                                                                           |
| Gender           | String     | Yes      | records gender of Instructor                                                                                         |
| description      | String     | Yes      | records description of class                                                                                         |
| cost             | String     | Yes      | records cost of class                                                                                                |
| equipmnet        | varchar    | Yes      | records indeication of what eequipment is needed                                                                     |
| arrivalTime      | date       | Yes      | records when clients should arrive for class                                                                         |



### savedClasses table 

| Name        | Type       | Required | Description                                                  |
| ----------- | ---------- | -------- | -------------------------------------------------------------|
| id          | increments | Yes      | records the number of the entreys                            |
| userId      | integer    | Yes      | uses foriegn key to connect a user id selected to this table |
| classId     | integer    | Yes      | uses foriegn key to connect a class id selected to this table|


## Endpoints To The API


### GET Requests

(Base URL : https://fitness-anywhere-jazmine.herokuapp.com)

>/https://fitness-anywhere-jazmine.herokuapp.com Will receive a **200(OK)** response if request is successful
##### Example 

```javascript
[
{
    "api": "up"
}
];
```
#### This request allows you to view all users in the database
>/api/users Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token as an instructor to receive this)

##### Example 

```javascript
{
    "data": [
        {
            "name": "Melanie",
            "type_name": "Instructor",
            "username": "Melanie233",
            "email": "melanie@melanie.com",
            "id": 5
        }
    ]
}
```
#### This request allows you to view all classes in the database

>/api/classes Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token to receive this)

##### Example   

```javascript
{
    "data": [
        {
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "level_name": "Beginner",
            "id": 1,
            "Gender": "Male",
            "Instructor": "Andrew",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        }
    ]
}
```
#### This request allows you to view a class using a specific class id 
>/api/classes/{class Id} Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token to receive this)

##### Example (this example is searching for class with id of 9)

```javascript
{
    "data": {
        "id": 9,
        "name": "Breathe Work and Meditation",
        "type": "meditation",
        "classStart": "2020-10-22T17:52:29.398Z",
        "classEnd": "2020-10-22T19:00:29.398Z",
        "duration": "30 minutes",
        "intensityLevel": 1,
        "location": "Newport Park",
        "currentRegistered": 24,
        "maxClassSize": 25,
        "Instructor": "Amy",
        "Gender": "Female",
        "description": "Class will be fun",
        "cost": "$15",
        "equipment": " None required",
        "arrivalTime": "New students arrive 15 min early"
    }
}
```

#### This request allows you to search through classses in the database based on any contriants within the class databse
>/api/classes/search Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token to receive this)

##### Body Example

```javascript
{
    "location": "Redwood Park"
}
```


##### Example (this example is searching for class at Location Redwood Park)

```javascript
{
    "data": [
        {
            "id": 1,
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Andrew",
            "Gender": "Male",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        },
        {
            "id": 3,
            "name": "Power Hour",
            "type": "weightlifting",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "45 minutes",
            "intensityLevel": 3,
            "location": "Redwood Park",
            "currentRegistered": 24,
            "maxClassSize": 25,
            "Instructor": "Kelly",
            "Gender": "Female",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        }
    ]
}
```
#### This request allows you to view classes saved to a particular client

>/api/classes/saved/${user id} Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token to receive this)


##### Example (this example is searching for class at Location Redwood Park)

```javascript
{
    "data": [
        {
            "userId": 1,
            "class_id": 1,
            "id": 1,
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Andrew",
            "Gender": "Male",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        },
        {
            "userId": 1,
            "class_id": 1,
            "id": 1,
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Andrew",
            "Gender": "Male",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        }
    ]
}
```

## POST Requests
#### This request allows you to register as a user in the database

>/api/auth/register Will recieve a **201(Created)** response if request is successful 


##### Body Example

```javascript
{
    "username" : "Melanie233",
    "password" : "password",
    "name" : "Melanie",
    "email" : "melanie@melanie.com",
    "authCode" : "2"
   
}
```


##### Example (this example is searching for class with id of 9)

```javascript
{
    "data": {
        "id": 5,
        "username": "Melanie233",
        "password": "$2a$12$jNXe0UOU.Bx070FUkrilM.o2mStB5COVbyARPxZeM4JAuB6rTEceK",
        "name": "Melanie",
        "email": "melanie@melanie.com",
        "authCode": "2"
    }
}
```

#### This request allows you to login and receive a token within the database

>/api/auth/login Will recieve a **200(OK)** response if request is successful 


##### Body Example

```javascript
{
    "username" : "Melanie233",
    "password" : "password"
   
}
```


##### Example 

```javascript
{
    "message": "Welcome to our API",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Ik1lbGFuaWUyMzMiLCJhdXRoQ29kZSI6IjIiLCJpYXQiOjE2MDM5MDQyMDIsImV4cCI6MTYwMzk5MDYwMn0.dsoGoSq8tb1asm2DacyEUWEDeviSu1x8A81VFv55FDo",
    "userId": 5,
    "authCode": "2"
}
```

#### This request allows you to create a new class within the database

>/api/classes Will recieve a **201(Created)** response if request is successful 

( you will need to have an authorized token as an instructor to receive this)


##### Body Example

```javascript
  {
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Andrew",
            "Gender": "Male",
            "description": "Class will be fun", 
            "cost": "$15" , 
            "equipment": "None required", 
            "arrivalTime": "New students arrive 15 min early"
            
        }
```


##### Example 

```javascript
{
    "data": {
        "id": 11,
        "name": "Aerobics",
        "type": "body-Weight",
        "classStart": "2020-10-22T17:52:29.398Z",
        "classEnd": "2020-10-22T19:00:29.398Z",
        "duration": "30 minutes",
        "intensityLevel": 1,
        "location": "Redwood Park",
        "currentRegistered": 6,
        "maxClassSize": 25,
        "Instructor": "Andrew",
        "Gender": "Male",
        "description": "Class will be fun",
        "cost": "$15",
        "equipment": "None required",
        "arrivalTime": "New students arrive 15 min early"
    }
}
```
#### This request allows you to save a class to a user within the database
>api/classes/${userId}/save/${classId} Will recieve a **201(Created)** response if request is successful 

( you will need to have an authorized token to receive this)


##### Example 

```javascript
{
    "data": [
        {
            "userId": 1,
            "class_id": 1,
            "id": 1,
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Andrew",
            "Gender": "Male",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        },
        {
            "userId": 1,
            "class_id": 1,
            "id": 1,
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Andrew",
            "Gender": "Male",
            "description": "Class will be fun",
            "cost": "$15",
            "equipment": " None required",
            "arrivalTime": "New students arrive 15 min early"
        }
    ]
}
```

## PUT Requests
#### This request allows you to update any class within the database
>/api/classes/${class id} Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token as an instructor to receive this)


##### Body Example

```javascript
  {
            "name": "Aerobics",
            "type": "body-Weight",
            "classStart": "2020-10-22T17:52:29.398Z",
            "classEnd": "2020-10-22T19:00:29.398Z",
            "duration": "30 minutes",
            "intensityLevel": 1,
            "location": "Redwood Park",
            "currentRegistered": 6,
            "maxClassSize": 25,
            "Instructor": "Amy",
            "Gender": "Male",
            "description": "Class will be fun", 
            "cost": "$15" , 
            "equipment": "None required", 
            "arrivalTime": "New students arrive 15 min early"
            
        }
```


##### Example 

```javascript
{
    "updated": 1
}
```

## DELETE Reuqest

#### This request allows you to remove any class within the database

>/api/classes/${class id} Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token as an instructor to receive this)


##### Example 

```javascript
{
    "removed": 1
}
```
#### This request allows you to remove any user within the database
>/api/users/${user id} Will recieve a **200(OK)** response if request is successful 

( you will need to have an authorized token as an instructor to receive this)


##### Example 

```javascript
{
    "removed": 1
}
```
















