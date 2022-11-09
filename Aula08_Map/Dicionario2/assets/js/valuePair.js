class valuePair{
    constructor(key, value1, value2) {
        this.key = key;
        this.value1 = value1;
        this.value2 = value2;
    }

    toString() {
        return `[#${this.key}:${this.value1}:${this.value2}]`;
    }
}