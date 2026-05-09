class Queue {
    constructor() {
        this.tracks = [];
        this.loop = false;
        this.current = null;
    }

    add(track) {
        this.tracks.push(track);
    }

    next () {
        if (this.loop && this.current) {
            this.tracks.push(this.current);
        }
        this.current = this.tracks.shift() || null;
        return this.current;
    }

    clear() {
        this.tracks = [];
        this.current = null;
    }
}

module.exports = Queue;