function myFunction() {
  var options =
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(
      {
        "text" : "毎週木曜日18時からリモートMGだよ！遅刻しないようにしよう！→https://apps.google.com/intl/ja/meet/"
      }
    )
  };
  UrlFetchApp.fetch("https://hooks.slack.com/services/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", options);
  // ↑ここは自分のWebhook URLに書き換える
}