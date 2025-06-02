function sendReminders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Reminders');
  const data = sheet.getDataRange().getValues();
  const now = new Date();

  for (let i = 1; i < data.length; i++) {
    const name = data[i][0];
    const task = data[i][1];
    const time = new Date(data[i][2]);
    const sent = data[i][3];

    if (!sent && time <= now) {
      // שלח תזכורת (לדוגמה: אימייל או לוג)
      Logger.log(`Reminder for ${name}: ${task}`);
      sheet.getRange(i + 1, 4).setValue(true); // סימון כתזכורת שנשלחה
    }
  }
}
