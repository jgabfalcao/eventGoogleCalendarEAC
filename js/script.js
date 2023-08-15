function handleAuthClick() {
  showLoading();
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    await createEvents();
    hideLoading();
    window.location.href = "conclusion.html";
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

async function createEvents() {
  const saturdayEvent = {
    summary: "Missa 100% EAC",
    location:
      "Paróquia Nossa Senhora das Graças - Praça Nossa Sra. das Graças, 312 - Vila Valenca, São Vicente - SP, 11390-080",
    description: "Voce confirmou seu compromisso!!!",
    start: {
      dateTime: "2023-09-02T17:00:00",
      timeZone: "America/Sao_Paulo",
    },
    end: {
      dateTime: "2023-09-02T18:00:00",
      timeZone: "America/Sao_Paulo",
    },
    colorId: "6",
    recurrence: ["RRULE:FREQ=MONTHLY;BYDAY=1SA;COUNT=12"],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 60 },
      ],
    },
  };

  const sundayEvent = {
    summary: "Missa 100% EAC",
    location:
      "Capela São José o Carpinteiro - Av. Dona Anita Costa, 617 - Vila Voturuá, São Vicente - SP, 11380-300",
    description: "Voce confirmou seu compromisso!!!",
    start: {
      dateTime: "2023-09-10T09:30:00",
      timeZone: "America/Sao_Paulo",
    },
    end: {
      dateTime: "2023-09-10T10:30:00",
      timeZone: "America/Sao_Paulo",
    },
    colorId: "6",
    recurrence: ["RRULE:FREQ=MONTHLY;BYDAY=2SU;COUNT=12"],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 60 },
      ],
    },
  };

  const saturdayRequest = gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: saturdayEvent,
  });
  saturdayRequest.execute(function (event) {
    console.log(event);
    console.log("Saturday Event created: " + event.htmlLink);
  });

  const sundayRequest = gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: sundayEvent,
  });
  sundayRequest.execute(function (event) {
    console.log(event);
    console.log("Sunday Event created: " + event.htmlLink);
  });
}
