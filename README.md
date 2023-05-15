# Word Frequency App
This is a React frontend application that fetches the contents of a text file, analyzes the word frequency, and displays a histogram of the 20 most occurring words. It utilizes the react-google-charts library to render the histogram chart. Additionally, it provides an option to export the histogram data as a CSV file.

# Getting Started
To get started with the Word Frequency App, follow the instructions below.

# Prerequisites
Make sure you have the following software installed on your machine:

1.Node.js (version 14 or higher)

2.npm (Node Package Manager, usually comes with Node.js)

# Creating a New React App

1.Open the command prompt or terminal.

2.Use the create-react-app command to build a new React app:

         npx create-react-app word-frequency-app
         
This command will build a new React project within a new directory named word-frequency-app.

3.Go to the project directory by clicking here:

          cd word-frequency-app
          
 #  Installing Dependencies
 1.Run the command below to install the Word Frequency App's necessary dependencies:
 
              npm install react-google-charts papaparse

2.This command will install the react-google-charts library for rendering the histogram chart      and the PapaParse library for CSV parsing.

# Running the App
1.Start the application:
    
    npm start
    
 2.Open your web browser and visit http://localhost:3000 to access the Word Frequency App.
   
 # Usage
1. Click the "Submit" button after entering the URL of the text file you wish to analyse.
2. The programme will get the text file's contents, examine the word frequency, and show a        histogram graphic of the top 20 words.
3. Click the "Export" button to save the histogram data as a CSV file. Your local computer will    download the CSV file.

# Dependencies
1.React

2.react-google-charts

3.PapaParse


