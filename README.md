# comeon-technical-nextjs

Zerxa Aeon Hundertpfund's submission for the JS coder application test created by ComeOn.

## Assignment Overview

The assignment is to use Javascript to tie together existing HTML and data to create a minimal, working casino website.

## Assignment Criteria

✅ App has to be functional across various devices a.k.a responsive.

### Login functionality

✅ Connect the login form to the /login ajax call.  
✅ On valid username/password, transition to the games list screen.  
✅ On invalid username/password, provide feedback and allow to try again.

### Log out functionality

✅ Connect the log out button to the /logout ajax call.  
✅ On valid log out, transition to login screen with empty input fields.

### Games list screen

✅ Requires user to be logged in.  
✅ List all games from the /games ajax call.  
✅ List categories from /categories ajax call.  
✅ Provide functionality for filtering by typing.  
✅ Provide functionality to filter by category.  
✅ Make it possible to start a game by clicking on the play icon.  

### Game play screen

✅ Requires user to be logged in.  
✅ Load the selected game via the provided API.  
✅ Provide a way to go back to the Games list screen.  

---

It is possible to login with four accounts:

```
username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock

username: 123
password: 123
```

## QuickSpin Games

All of the linked games and their media files and descriptions are properties of QuickSpin AB and can be found publicly on their web site at https://quickspin.com/

## External Libraries and Frameworks Used

### Frameworks
- Next.js

### Libraries
- NextAuth
- Tailwind CSS
- HyperUI
- HeadlessUI
- Express

### Pre-Built UI Components
- Tailwind UI Components
