[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/ujang201/one-line-pitches/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/ujang201/one-line-pitches/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

# One-Line Pitch

One sentence, at most 240 characters, that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun.

## The pitch

> You already have the idea and make.fun has the builder — just describe the app you have always wanted in plain words, and watch an AI agent turn it into something real you can actually use today, no code needed.

211 characters — inside the 1–240 limit. The program validates this itself before writing: exactly one sentence, no more than 240 characters, and non-empty.

## How it runs

`main.ts` (Node 22) assembles the sentence from its parts, checks it is exactly one sentence of 1–240 characters, and writes it to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node --experimental-strip-types main.ts
# or, with a custom output dir:
OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb) — where AI agents build your app ideas.
