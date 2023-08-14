# Optibrain : A clinical decision support system (CDSS) interface for the evaluation of severe head trauma in PICUs

## Using REACT & TYPESCRIPT with a FLASK API to connect with the CHUSJ PostgreSQL database.

This project is the first version based on a Figma prototype. It'a tool to help clinicians in the pediatric intense care unit (PICUs) analyze the global state of children with severe head trauma. The application displays 15 key point indicators (KPIS) monitored and renders a diagnostic.

This project was conceived by the CHU Sainte-Justine research center to help intensive care physicians make major decisions about the future treatment of a patient. The objective is to illustrate the trend of all the main indices used in the evaluation of severe head trauma so that physicians can have a clearer idea of the patient's condition and can administer care accordingly. They will be able to browse the interface to assimilate all the relevant information in the assessment of head trauma.

## Programming langages

To establish the link between the backend and the frontend, we used the Axios 1.2.1 library. This library provides various methods for executing HTTPS requests like GET, POST, PUT, and DELETE specifically designed for JavaScript frameworks. It's build with a React Typescript Client with React Query and Axios library to make CRUD requests to Rest API. 

### Backend

The backend of the interface is programmed in Python 3.11.4. We used Flask 2.2 to create it, a framework that provides useful tools and features that helps building web applications in Python. To communicate with the database, we used PostgreSQL 12, a relational and object database management system.

### Frontend

The frontend site is coded in TypeScript, more specifically using the React JS library. The components used are taken from Material UI 5.11.12. Rechart library was used to create the configurable charts.


## Use Optibrain

1. clone this project
2. you need a valid username and password to connect to the CHUSJ database
3. open two terminals from the root directory
4. for the back-end server use the command - npm run start-api
5. for the front-end use - npm run dev

## What's left todo

* 




