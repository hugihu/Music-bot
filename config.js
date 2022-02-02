module.exports = {
    app: {
        px: '#',
        token: 'OTM4MjMwMzU1MTkyODU2NjY2.YfnRHA.MKgAQyzse6mBQr7FL662cSl0q8g',
        playing: 'Squanch'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
