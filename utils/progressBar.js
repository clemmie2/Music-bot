function pogressBar(pos, dur) {
    const size = 12;
    const percent = pos / dur;
    conts filled = Math.round(size * percent);

    return "[" +
    "█".repeat(filled) +
    "─".repeat(size - filled) +
    "] " +
    Math.floor(percent * 100) + "%";
}

module.exports = pogressBar