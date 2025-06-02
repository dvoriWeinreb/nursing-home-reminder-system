function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function addReminder(data) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Reminders');
  sheet.appendRow([data.residentName, data.reminderType, data.description, data.date, data.time]);
  return getReminders();
}

function getReminders() {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Reminders');
  return sheet.getDataRange().getValues().slice(1); // בלי שורת כותרת
}
