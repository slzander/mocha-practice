describe("Smoke test", () => {
    it("should pass", () => {
        chai.assert(true, true)
    })
})

describe("#sum", () => {
    it("adds 1 and 2", () => {
        const total = sum(1,2)
        chai.expect(total).to.equal(3)
    })
    it("adds 2 and 2", () => {
        const total = sum(2,2)
        chai.expect(total).to.equal(4)
    })
})

describe("#increment", () => {
    it("should increment a count by 1", () => {
        chai.expect(count).to.equal(0)
        increment()
        chai.expect(count).to.equal(1)
    })
})