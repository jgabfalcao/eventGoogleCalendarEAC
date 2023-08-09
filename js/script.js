// const CLIENT_ID =
//   "147674603370-c10hkkav6duhgobc63p1jicjivtlhq0a.apps.googleusercontent.com";
// const API_KEY = "AIzaSyBkMFy1OLiHw9DjvjEDyH6785Rqv6qsQBQ";

// const DISCOVERY_DOC =
//   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

// const SCOPES = "https://www.googleapis.com/auth/calendar";

// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

// function gapiLoaded() {
//   gapi.load("client", initializeGapiClient);
// }

// async function initializeGapiClient() {
//   await gapi.client.init({
//     apiKey: API_KEY,
//     discoveryDocs: [DISCOVERY_DOC],
//   });
//   gapiInited = true;
//   maybeEnableButtons();
// }

// function gisLoaded() {
//   tokenClient = google.accounts.oauth2.initTokenClient({
//     client_id: CLIENT_ID,
//     scope: SCOPES,
//     callback: "", // defined later
//   });
//   gisInited = true;
//   maybeEnableButtons();
// }

// function handleAuthClick() {
//   tokenClient.callback = async (resp) => {
//     if (resp.error !== undefined) {
//       throw resp;
//     }

//     await createEvents();
//   };

//   if (gapi.client.getToken() === null) {
//     // Prompt the user to select a Google Account and ask for consent to share their data
//     // when establishing a new session.
//     tokenClient.requestAccessToken({ prompt: "consent" });
//   } else {
//     // Skip display of account chooser and consent dialog for an existing session.
//     tokenClient.requestAccessToken({ prompt: "" });
//   }
// }

// async function createEvents() {
//   const event = {
//     summary: "Missa 100% EAC",
//     location:
//       "Paróquia Nossa Senhora das Graças ==> Endereço: Praça Nossa Sra. das Graças, 312 - Vila Valenca, São Vicente - SP, 11390-080",
//     description: "Voce confirmou seu compromisso!!!",
//     start: {
//       dateTime: "2023-08-10T17:00:00",
//       timeZone: "America/Sao_Paulo",
//     },
//     end: {
//       dateTime: "2023-08-10T18:00:00",
//       timeZone: "America/Sao_Paulo",
//     },
//     recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
//     attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
//     reminders: {
//       useDefault: false,
//       overrides: [
//         { method: "email", minutes: 24 * 60 },
//         { method: "popup", minutes: 10 },
//       ],
//     },
//   };

//   const event2 = {
//     summary: "Missa 100% EAC",
//     location:
//       "Paróquia Nossa Senhora das Graças ==> Endereço: Praça Nossa Sra. das Graças, 312 - Vila Valenca, São Vicente - SP, 11390-080",
//     description: "Voce confirmou seu compromisso!!!",
//     start: {
//       dateTime: "2023-08-20T18:30:00",
//       timeZone: "America/Sao_Paulo",
//     },
//     end: {
//       dateTime: "2023-08-20T19:30:00",
//       timeZone: "America/Sao_Paulo",
//     },
//     recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
//     attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
//     reminders: {
//       useDefault: false,
//       overrides: [
//         { method: "email", minutes: 24 * 60 },
//         { method: "popup", minutes: 10 },
//       ],
//     },
//   };

//   const request = gapi.client.calendar.events.insert({
//     calendarId: "primary",
//     resource: event,
//   });

//   const request2 = gapi.client.calendar.events.insert({
//     calendarId: "primary",
//     resource: event2,
//   });

//   request.execute(function (event) {
//     appendPre("Event created: " + event.htmlLink);
//   });

//   request2.execute(function (event) {
//     appendPre("Event created: " + event.htmlLink);
//   });
// }

// async;
// defer;
// src = "https://apis.google.com/js/api.js";
// onload = "gapiLoaded()";

// async;
// defer;
// src = "https://accounts.google.com/gsi/client";
// onload = "gisLoaded()";
