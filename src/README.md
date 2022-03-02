# FCM-API
Build an API from Node.js for pushing notifications via Firebase Cloud Messaging (FCM) to the mobile application (Send to specific Device through token), testing on Postman
# **Check it out! 👇**
## Main topic 📓
### *Created your own nodeJS server, received the registration token from the mobile application making the API call and sent a custom message using firebase cloud messaging.*

#### First, you might want to have a glance at the mobile application that receives the notification through the API, check this repository for more information before going through this project 👇:
### **https://github.com/tduongtad1304/notify**

## Usage 👨‍💻

### **Going through it, first, clone this repository by:**
```$ git clone https://github.com/tduongtad1304/FCM-API.git```
### **Then, installing require dependencies, including:**
- [Firebase-admin](https://www.npmjs.com/package/firebase-admin) 👉 ```npm i firebase-admin```
- [Express](https://www.npmjs.com/package/express) 👉 ```npm i express```
- [Body-parser](https://www.npmjs.com/package/body-parser) 👉 ```npm i body-parser```

### **or just simply:** ```npm install```

### ⚠ Important: 
#### You need to download and add the "service account" JSON file for interacting with mobile application, for more information: 
### **https://cloud.google.com/iam/docs/creating-managing-service-account-keys**

### **Next, just run the code by:** ```npm start```

## Testing on Postman ✔
### Create a new collection and paste the url: ```localhost:3000/firebase/notification```, choose the method POST and choose the raw JSON type with the following structure:
```
{
  "registrationToken: "your registration Token here (find on the mobile application)",
    "title": "title of notification",
    "body": "body of notification"
}
```

### Then click Send and enjoy.
