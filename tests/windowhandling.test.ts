import {expect, test} from "@playwright/test"

test("window handling",async({page})=>{


    await page.goto("https://nxtgenaiacademy.com/multiplewindows/")

    console.log(page.url());


    const [newWindow] = await Promise.all([

        page.waitForEvent("popup"),

        page.click("'New Browser Window'")

    ]);

    console.log(newWindow.url());



})

// test("Multiple window handling",async({page})=>{


//     await page.goto("https://demo.automationtesting.in/Windows.html")

//     console.log(page.url());


//     const [mulitpleWindow] = await Promise.all([

//         page.waitForEvent("popup"),

//         page.click("#div#Multiple>button")

//     ]);

//     const pages = mulitpleWindow.context().pages();
//     console.log('No of tabs' +pages.length);

//     // pages(for)



// })





