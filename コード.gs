function myFunction() {
  const options =
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(
      {
        "text" : "木曜日18時からリモートミーティングだよ！"
      }
    )
  };
  UrlFetchApp.fetch("https://hooks.slack.com/services/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", options);
  // ↑ここは自分のWebhook URLに書き換える
}
