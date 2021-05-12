let appts;

async function getAppts() {
  fetch("appts.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      appts = data.data;
      createAppt();
      createCalendar();
      setDates(appts);
      createSideBar();
    })
    .catch((err) => {
      console.log(err);
    });
}

const Year = {
  Months: [
    {
      name: "January",
      number: "01",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "February",
      number: "02",
      days: "28",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "March",
      number: "03",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "April",
      number: "04",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "May",
      number: "05",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "June",
      number: "06",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "July",
      number: "07",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "August",
      number: "08",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "September",
      number: "09",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "October",
      number: "10",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "November",
      number: "11",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "December",
      number: "12",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
  ],
  Week: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  WeekAbrv: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

let todaysDate = new Date();

let dislayDateChanger = todaysDate.getMonth();
let plusMinusCounter = 0;
let myNum = dislayDateChanger;

function createCalendar() {
  document.querySelector("#calendar").innerHTML = "";
}
function setDates(myNum) {
  createCalendar();
  let superDate = document.createElement("div");
  let superDays = document.createElement("div");

  superDate.setAttribute("id", "date");
  superDays.setAttribute("id", "days");

  document.querySelector("#calendar").appendChild(superDate);
  document.querySelector("#calendar").appendChild(superDays);

  superDate.innerHTML = "";
  superDays.innerHTML = "";

  if (dislayDateChanger < 0) {
    dislayDateChanger = 11;
    --plusMinusCounter;
  }
  if (dislayDateChanger > 11) {
    dislayDateChanger = 0;
    ++plusMinusCounter;
  }
  let myDate = new Date();

  let thisMonth = Year.Months[dislayDateChanger].name;
  let curretMonth = Year.Months[myDate.getMonth()].name;
  let currentYear = myDate.getFullYear();
  let thisYear = myDate.getFullYear() + plusMinusCounter;
  let thisDay = myDate.getDate();
  let thisDayofWeek = Year.Week[myDate.getDay()];

  let fullDate =
    "Today's Date: " +
    "<br>" +
    thisDayofWeek +
    " " +
    curretMonth +
    " " +
    thisDay +
    ", " +
    currentYear;

  let monthArrows = document.createElement("div");
  monthArrows.setAttribute("id", "arrowsBox");
  monthArrows.setAttribute("class", "text-center");

  let spacerBox = document.createElement("div");
  let spacerBox1 = document.createElement("div");
  let spacerBox2 = document.createElement("div");
  let spacerBox3 = document.createElement("div");

  let arrowBoxLeft = document.createElement("div");
  arrowBoxLeft.setAttribute("class", "fa fa-arrow-left grid-item arrow");
  arrowBoxLeft.setAttribute("onClick", "minusCalDay()");

  let arrowBoxRight = document.createElement("div");
  arrowBoxRight.setAttribute("class", "fa fa-arrow-right grid-item arrow");
  arrowBoxRight.setAttribute("onClick", "plusCalDay()");

  let monthBoxMiddle = document.createElement("div");
  monthBoxMiddle.innerHTML = thisMonth + " " + thisYear;
  monthBoxMiddle.setAttribute("class", "grid-item");

  let monthElement = document.createElement("div");

  monthElement.appendChild(arrowBoxLeft);
  monthElement.appendChild(spacerBox);
  monthElement.appendChild(spacerBox1);
  monthElement.appendChild(monthBoxMiddle);
  monthElement.appendChild(spacerBox2);
  monthElement.appendChild(spacerBox3);
  monthElement.appendChild(arrowBoxRight);
  monthElement.setAttribute("class", "grid-container monthEl");

  let fullDateEl = document.createElement("div");
  fullDateEl.setAttribute("class", "fullDate");
  fullDateEl.innerHTML = fullDate;

  monthArrows.appendChild(monthElement);

  let lineBreak = document.createElement("br");

  let todayBtn = document.createElement("div");
  todayBtn.setAttribute("class", "fa fa-home homeButton homeToToday");

  todayBtn.setAttribute("onClick", "refreshPage()");

  document.querySelector("#date").appendChild(todayBtn); // full date;
  document.querySelector("#date").appendChild(fullDateEl); // full date;
  document.querySelector("#date").appendChild(lineBreak); // full date;
  document.querySelector("#date").appendChild(monthArrows); //month and arrow boxes

  createDays(
    myDate,
    thisYear,
    thisDay,
    thisDayofWeek,
    plusMinusCounter,
    thisMonth,
    curretMonth,
    currentYear,
    appts
  );
}

function createDays(
  dates,
  thisYear,
  thisDay,
  thisDayofWeek,
  plusMinusYearCounter,
  thisMonth,
  curretMonth,
  currentYear,
  appt
) {
  let weekAbrv = Year.WeekAbrv;

  // Gets First Day of the Month
  let firstDayLongV = new Date(
    dates.getFullYear() + plusMinusYearCounter,
    dislayDateChanger,
    1,
    0
  );
  let firstDay = firstDayLongV.toString();

  for (let k = 0; k < weekAbrv.length; k++) {
    if (firstDay.includes(weekAbrv[k])) {
      firstDay = Year.Week[k];
    }
  }

  ////////////////////////////////

  //Calculate Spacer Days
  let spacerDays = Year.Week.indexOf(firstDay);
  ////////////////////////////////
  let calendar = document.createElement("div");
  calendar.classList.add("grid-container", "calendar", "text-center");

  for (let h = 0; h < spacerDays; h++) {
    let newSpacerDays = document.createElement("div");
    newSpacerDays.classList.add("grid-item", "day", "container");
    newSpacerDays.setAttribute("style", "visibility: hidden");
    calendar.appendChild(newSpacerDays);
  }

  //Create Calendar
  for (let i = 0; i < Year.Months[dislayDateChanger].days; ++i) {
    let calNum = i + 1;
    let dayForm = document.createElement("div");
    let day = document.createElement("div");

    let newId =
      thisYear + "-" + Year.Months[dislayDateChanger].number + "-" + calNum;
    newId = JSON.stringify(newId);
    let idForForm = document.createElement("div");
    idForForm.setAttribute("style", "display: none");
    idForForm.innerHTML = newId;

    day.classList.add("grid-item", "day", "container");
    day.innerHTML = calNum;
    day.setAttribute("style", "margin-top: 10px; margin-bottom:10px");
    day.setAttribute("id", newId);
    day.setAttribute("onClick", "displayAppt(" + newId + ")");
    let dotdiv = document.createElement("div");

    if (
      calNum === thisDay &&
      thisMonth === curretMonth &&
      thisYear === currentYear
    ) {
      day.classList.add("todayDate");
    }
    for (let k = 0; k < appts.length; ++k) {
      let shortAppt = JSON.stringify(appts[k]);
      if (shortAppt.includes(newId)) {
        dotdiv.setAttribute("class", "appt");
      }
      if (appts[k].holiday === 1 && shortAppt.includes(newId)) {
        day.classList.add("holiday");
      }
    }
    day.appendChild(dotdiv);
    dayForm.appendChild(idForForm);
    dayForm.appendChild(day);
    calendar.appendChild(dayForm);
  }
  document.querySelector("#days").appendChild(calendar);
}

function plusCalDay() {
  ++dislayDateChanger;
  setDates(dislayDateChanger);
}

function minusCalDay() {
  --dislayDateChanger;
  setDates(dislayDateChanger);
}

function createSideBar() {}

function createAppt() {
  let createApptContainer = document.createElement("div");
  let createApptForm = document.createElement("form");
  let createApptLabel = document.createElement("label");
  let createApptInput = document.createElement("input");
  let createApptDate = document.createElement("input");
  let createApptSubmit = document.createElement("button");

  createApptContainer.setAttribute("id", "createApptContainer");
  createApptForm.setAttribute("id", "createApptForm");
  createApptLabel.setAttribute("id", "createApptLabel");
  createApptInput.setAttribute("id", "createApptInput");
  createApptDate.setAttribute("id", "createApptDate");
  createApptSubmit.setAttribute("id", "createApptSubmit");

  createApptForm.setAttribute("action", "/calendar");
  createApptForm.setAttribute("method", "POST");

  createApptLabel.setAttribute("for", "createAppt");
  createApptLabel.innerHTML = "Make an Appointment";

  createApptInput.setAttribute("name", "appointment");
  createApptInput.setAttribute("type", "text");
  createApptInput.setAttribute("placeholder", "eg: Flight to LA");

  createApptDate.setAttribute("type", "date");
  createApptDate.setAttribute("name", "date");

  createApptSubmit.setAttribute("type", "submit");
  createApptSubmit.innerHTML = "Submit";

  createApptForm.appendChild(createApptLabel);
  createApptForm.appendChild(createApptInput);
  createApptForm.appendChild(createApptDate);
  createApptForm.appendChild(createApptSubmit);

  createApptContainer.appendChild(createApptForm);

  document.querySelector(".addAppts").appendChild(createApptContainer);
}

function displayAppt(clickedDate) {
  document.querySelector("#sidebar").innerHTML = "";
  document.querySelector("#sidebar").setAttribute("style", "display: block");
  let appointments = document.createElement("div");
  let clik = clickedDate.toString();

  for (let i = 0; i < appts.length; ++i) {
    if (clickedDate === appts[i].date) {
      let apptEl = document.createElement("div");
      apptEl.setAttribute("class", "apptEl");

      let title = document.createElement("div");
      title.setAttribute("class", "titleOfAppt");
      title.innerHTML = appts[i].appointment;

      let date = document.createElement("div");
      date.setAttribute("class", "apptDate");
      date.innerHTML = appts[i].date;

      let line = document.createElement("hr");

      apptEl.appendChild(title);
      apptEl.appendChild(date);
      apptEl.appendChild(line);

      appointments.appendChild(apptEl);
    }
  }

  document.querySelector("#sidebar").appendChild(appointments);
}

function main() {
  getAppts();
}

main();
