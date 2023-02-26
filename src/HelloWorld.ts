export type HelloWorldInput = {}

export type HelloWorldOutput = {
    "Message": "Hello World!"
}

export function HelloWorld(input:HelloWorldInput) {
    return {
        "Message": "Hello World!"
    }
}
