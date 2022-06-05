const add =  require("../src/index.tsx")
// @ponicode
describe("add", () => {
    test("0", () => {
        add(100)
    })

    test("1", () => {
        add(1)
    })

    test("2", () => {
        add(-5.48)
    })

    test("3", () => {
        add(-100)
    })

    test("4", () => {
        add(Infinity)
    })

    test("5", () => {
        add(NaN)
    })

    test("6", () => {
        add(-Infinity)
    })

    test("7", () => {
        add(0)
    })
})
