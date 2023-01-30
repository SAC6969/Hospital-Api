# Hospital-Api
design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

// Doctor sign up & sign in
http://localhost:8000/api/v1/doctor/sign-up
//returns the JWT to be used
http://localhost:8000/api/v1/doctor/sign-in

//Patient register
http://localhost:8000/api/v1/patient/register

//creating report for patient using params
http://localhost:8000/api/v1/patient/63d7697a2f8b51b68ee30089/create-report

//showing all report of the patient
http://localhost:8000/api/v1/patient/63d7697a2f8b51b68ee30089/all-reports

//List all the reports of all the patients filtered by a specific status
http://localhost:8000/api/v1/reports/Positive-Admit
