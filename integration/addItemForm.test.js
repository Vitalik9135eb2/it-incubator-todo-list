describe("addItemForm", () =>{

    it("base example, visually looks correct", async  () => {

        await page.goto("http://localhost:9009/iframe.html?args=&id=additemform--add-item-form-base-example&viewMode=story");

        await page.waitForTimeout(3000)
        const image = await page.screenshot()

        expect(image).toMatchSnapshot()
    })


})