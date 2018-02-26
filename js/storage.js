// Copyright Jason Daniels 2018 Licensed under the Academic Free License version 3.0

function storeCSV(csvText) {
  try {
    window.localStorage.setItem("csv", csvText);
  } catch (error) {
    console.log("Unable to store CSV.");
  }
}

function storedCSV() {
  try {
    return window.localStorage.getItem("csv");
  } catch (error) {
    console.log("Unable to read stored CSV.\nTry choosing a file.");
    return "";
  }
}

function storePIN(pin) {
  if (pin === null || pin.length <= 0) {
    document.getElementById("savePIN").checked = false;
    return;
  }

  try {
    var filter = document.getElementById("filter").value;

    if (document.getElementById("savePIN").checked) {
      window.localStorage.setItem("pin", pin);
      window.localStorage.setItem("filter", filter);
    } else {
      window.sessionStorage.setItem("pin", pin);
      window.sessionStorage.setItem("filter", filter);
      window.localStorage.removeItem("pin");
      window.localStorage.removeItem("filter");
    }
  } catch (error) {
    console.log("Unable to store PIN.");
  }
}

function storedPIN() {
  try {
    var pin = window.localStorage.getItem("pin");
    var filter = window.localStorage.getItem("filter");

    if (filter === null) {
      filter = window.sessionStorage.getItem("filter");
    }

    document.getElementById("filter").value = filter;

    if (pin) {
      document.getElementById("savePIN").checked = true;
      return pin;
    }

    pin = window.sessionStorage.getItem("pin");

    if (pin) {
      return pin;
    } else {
      return "";
    }
  } catch (error) {
    console.log("Unable to read stored PIN.");
    return "";
  }
}
