export function generateId(size: number) {
    const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const arr = str.split('')

    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (arr.length - 1))
        const k = arr[i]

        arr[i] = arr[j]
        arr[j] = k
    }

    const start = Math.floor(Math.random() * (arr.length - size - 1))
    const end = start + size

    const id = arr.slice(start, end).join('')
    return id;
}