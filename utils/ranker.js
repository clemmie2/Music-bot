function rankTracks(tracks, query) {
    const q = query.toLowerCase();

    return tracks
    .map(t => {
        let score = 0;

        const title = t.info.title.toLowerCase();

        if(title === q) score += 100;
        if (title.includes(q)) score += 50;
        if (t.info.author?.toLowerCase().includes(q)) score += 20;

        return { t, score };
    })
    .sort((a, b) => b.score - a.score)
    .map (x => x.t );
}

module.exports = rankTracks