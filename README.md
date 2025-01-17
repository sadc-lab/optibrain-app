# Optibrain : A CDSS interface for the evaluation of severe head trauma in PICUs

This project was conceived by the CHU Sainte-Justine research center. It is the first version based on a Figma prototype. This clinical decision support system (CDSS) is to help physicians in the pediatric intense care unit (PICUs).

The objective is to illustrate the trend of all the main indices (KPIS) used in the evaluation of severe head trauma to help intensive care physicians make major decisions about the future treatment of a patient. They will be able to browse the interface to assimilate all the relevant information in the assessment of head trauma.

## Programming langages

To establish the link between the backend and the frontend, I used the Axios 1.2.1 and React Query libraries. These libraries provide various methods for executing HTTPS requests. Typescript React Application using Vite

Vite : https://vitejs.dev/guide/why.html

### Backend

The backend of the interface is programmed in Python 3.11.4. We used Flask 2.2 to create it, a framework that provides useful tools and features that helps building web applications in Python. To communicate with the database, we used PostgreSQL 12, a relational and object database management system.

### Frontend

The frontend site is coded in TypeScript, more specifically using the React JS library. The components used are taken from Material UI 5.11.12. Rechart library was used to create the configurable charts.


## Use Optibrain

1. clone this project
2. you need a valid username and password to access CHUSJ database
3. from /flask-server create a virtual environnement
4. install all the packages with (.venv) source .venv/bin/activate && pip install -r requirements.txt
5. from /client directory from open two terminals
6. for the back-end server use the command - npm run start-api
7. for the front-end use - npm run dev





