# Discord Music Bot

A powerful Discord music bot built with JavaScript, Discord.js, Shoukaku, and Lavalink v4.

## Features

### Music Playback

* YouTube search support
* Spotify search support
* YouTube playlists
* Spotify playlists
* Smart search ranking
* Multi-guild queue system
* Auto-play next track
* Loop mode
* Skip tracks
* Stop playback

### Interactive Controls

* Pause button
* Resume button
* Skip button
* Stop button
* Loop button

### Advanced Features

* Live now playing embed
* Real-time progress bar
* 24/7 voice mode
* Session-based player management
* Lavalink v4 support

---

## Tech Stack

* JavaScript
* Node.js
* Discord.js v14
* Shoukaku
* Lavalink v4

---

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_NAME
```

Install dependencies:

```bash
npm install
```

---

## Configuration

Create a `.env` file:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

Configure `config.js`:

```js
module.exports = {
  lavalink: {
      name: "MainNode",
          url: "lava-v4.millohost.my.id:443",
              auth: "YOUR_LAVALINK_PASSWORD",
                  secure: true
                    }
                    };
                    ```

                    ---

                    ## Running the Bot

                    Start the bot:

                    ```bash
                    node index.js
                    ```

                    ---

                    ## Commands

                    | Command | Description                |
                    | ------- | -------------------------- |
                    | `/play` | Play music or add to queue |
                    | `/247`  | Toggle 24/7 mode           |
                    | `/skip` | Skip current track         |
                    | `/stop` | Stop playback              |
                    | `/loop` | Toggle loop mode           |

                    ---

                    ## Project Structure

                    ```bash
                    bot/
                    ├── commands/
                    ├── structures/
                    ├── utils/
                    ├── ui/
                    ├── index.js
                    ├── config.js
                    └── .env
                    ```

                    ---

                    ## Requirements

                    * Node.js 18+
                    * Discord Bot Token
                    * Lavalink v4 Node

                    ---

                    ## License

                    MIT License

                    ---

                    Built for high-performance Discord music playback.
                    