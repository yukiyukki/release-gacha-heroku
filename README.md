# 社内向けbolt application

あまり公開向けに書いていないので雑。

## Slash commands

- /jira-comment-dm

jiraコメント通知へユーザー追加用のコマンド

- /release-gacha

リリース当番ガチャ

## other endpoints

- /jira-post

jiraからのwebhooks送信先

- /keep-alive

herokuのkeep alive用

## 環境変数

```
PORT 起動port
JIRA_URL jiraのドメイン設定
DEBUG debug mode
SLACK_BOT_TOKEN slack token
SLACK_SIGNING_SECRET slack signing secret
```

## License

seratch/bolt-on-heroku に準じます