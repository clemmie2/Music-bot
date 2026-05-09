function progressBar(pos, dur) {
    const size = 12;
    const percent = pos / dur;
    const filled = Math.round(size * percent);

    return "[" +
    "█".repeat(filled) +
    "─".repeat(size - filled) +
    "] " +
    Math.floor(percent * 100) + "%";
}

module.exports = progressBar