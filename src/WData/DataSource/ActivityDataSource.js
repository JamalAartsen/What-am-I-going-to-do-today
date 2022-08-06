import fakeData from "./FakeData"

export function fetchData() {
    try {
        let data = fakeData[2]

        return Promise.resolve({ error: null, result: data })

    } catch (err) {
        return Promise.resolve({ error: err.message, result: null })
    }
}