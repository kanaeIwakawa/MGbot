function myFunction() {
  const functionName = 'targetFunction';
  const date = new Date();
  const time = '18:00';
  const contents = `<!here>	お疲れ様です。
毎週木曜日18時はリモートMGだよ!
https://apps.google.com/intl/ja/meet/
`
  date.setHours(...time.split(':'));
  setTrigger(functionName, date);
}

function setTrigger(){
  //毎週木曜日のPM18:00に繰り返し定期実行するトリガーを作成
  ScriptApp.newTrigger('triggerTest').timeBased().onWeekDay(ScriptApp.WeekDay.THURSDAY).atHour(18).create();
}

function targetFunction() { }