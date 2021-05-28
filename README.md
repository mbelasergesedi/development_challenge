# CTSU Dev Challenge - N°1 : The SubjectApp

Your mission, if you accept, will be to develop a small application named SubjectApp made of :

* an Angular (v12.0.1) frontend
* a Node (v14.17.0) backend in Typescript (or Javascript)
* a Postgresql (v13.2.1) database


## Description

### Part 1 : Display a list of Subjects

The goal of this part is to succeed in displaying a first list of subjects

- Object :  Subjects must be stored in a Pg database served to the Angular frontend via a Node API
- Story 1 :    As an anonymous user, I can see a list of all subjects
- Database :
  - server name : pgdev
    - db name : dbdev
      - schema name : subjects
        - table name : subject
- Backend :
  - webservice name : subjects_ws
  - api endpoint 1 : List of All Subjects
    - api request :   /api/v1/subjects
    - api response : json list containing the following subjects :

```json
[
    {
        "subject_id": 1,
	"subject_number": "254013",
	"subject_firstname": "Bart",
	"subject_lastname": "Mertens",
        "subject_birthdate": "1954-01-13"
    },
    {
        "subject_id": 2,
	"subject_number": "254034",
	"subject_firstname": "Martin",
	"subject_lastname": "Dupont",
        "subject_birthdate": "1945-05-08"
    },
    {
        "subject_id": 3,
	"subject_number": "254067",
	"subject_firstname": "John",
	"subject_lastname": "Smith",
        "subject_birthdate": "2000-02-29"
    }
]

```

* Frontend :

  * a page displaying the previous List of subjects
* Test :

  * a Postman collection and environnment in a ./doc/tests project folder
* Version :

  * add all changes in Git and get a commit for this part with the following message : "v1.0.0 (feat) : list of all subjects"

---



### Part 2 : Add a new Subject

The goal of this part is to succeed in adding a new subject.

- Object :  Subjects must be entered via an Angular form and posted via an API endpoint into the Pg database
- Story 2 :    As an anonymous user, I can add a new subject
- Backend :

  - webservice name : subjects_ws
  - api endpoint 2 :  Add a New Subject

    - api request :  prefixed by /api/v1
    - api response : a json object with subject_id returned by DB following this format :

```json
eg :
{
	"success": true,
        "action" : "add_subject",
	"subject_id": 4
}
```

* Frontend :

  * a page displaying a Form to enter a new Subject
* Test :

  * a manual (or e2e) test to show that new entered subject is present in the subject list
* Version :

  * add all changes in Git and get a commit for this part with the following message : "v1.0.0 (feat) add a new subject"
* Nice to have :

  * use a reactive form
  * display birth date with format : dd/MM/yyyy in the list of subjects
  * use a datepicker in the subject entry form (or validate entry for birthdate)
  * check unicity of subject entry
  * handle errors (eg : backend ws off)
  * audit any change on subject table
  * use a git branch for each feature

---



### Part 3 : Subjects are affected to a Cancer Center

The goal of this part is to succeed in linking each subject to a Center.

- Object : Subjects can now be linked to a Cancer Center
- Story 3 :    As an anonymous user, I can add a new subject linked to one of 3 possible Centers
- Database :

  - server name : pgdev
    - db name : dbdev
      - schema name : centers
        - table name : center [center_id, center_name, center_number]
        - Fixture data : feel free to feed 3 demo center entries
- Backend (update) :

  - webservice name : subjects_ws
  - api endpoint 3 : List of All Subjects and their Centers
    - api request :   /api/v1/subjects_with_centers
    - api response : json list containing the following subjects and centers

* Frontend (update):

  * a page displaying a Form to enter a new Subject and his Center
  * a page displaying the previous List of subjects with columns for centers info
* Test (update) :

  * an updated Postman collection and environment in a ./doc/tests project folder
* Version :

  * add all changes in Git and get a commit for this part with the following message : "v1.0.0 (feat) list of all subjects with centers"
* Nice to have :

  * find a reversible way to anonymise subjects directly in DB (sensitive info : first_name, last_name, birth_date)
  * enter a new subject without center and display a filtered subject list (only subjects with a center) in angular level, backend level or db level
  * we forgot to precise that each center has additional variable info (eg :  street_name, street_number, postal_code, city_name, country_name, country_code...), can you add it in a jsonb column ?

---



### Part 4 : Authenticated Access

The goal of this part is to succeed in securing access to the list of subjects.

- Object : Subjects can now be seen only by authenticated users
- Epic :  Give access to subjects list and form only to authenticated users
- Story 4.1 :    As an anonymous user, I can only access to a login form.
- Story 4.2 :    As an authenticated user, I can access to the subjects list and subject entry form
- Database :

  - server name : pgdev
    - db name : dbdev
      - schema name : users
        - table name :  user
- Backend :

  - webservice name : auth_ws (for example)
  - api endpoints : to be proposed by you

* Frontend :

  * a Log in form
* Test (update) :

  * write acceptance criteria
  * an updated Postman collection and env ready to be played in a ./doc/tests project folder
  * a manual or e2e tests collection
* Version :

  * add all changes in Git and get a commit for this part with the following message : "v1.0.0 (feat) secured access"
* Nice to have :

  * use stateless authentication with token
  * display the logged user in a menu header
  * store salted password in DB
  * possibility to log out
  * a remember-me feature (logged in duration of 1 hour)
  * a nice responsive layout

---

Thanks !   🚀️

The CTSU Dev Team
