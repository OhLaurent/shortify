export class Url {
    public readonly id: string
    public link: string

    constructor (props: Url) {
        Object.assign(this, props)
    }
}