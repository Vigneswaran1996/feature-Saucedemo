import {expect, test} from "@playwright/test"

test("handling drop down",async({page})=>{


    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")

    await page.selectOption("//div[@rel-title='Select Country']//select[1]",{

    label:"American Samoa",
    // for value 

    // value:"Colombia",

    // for index 
    
    // index:6

    })

 await page.waitForTimeout(3000);
    
})

// test("multiple select drop down",async({page})=>{


//     await page.goto("https://demoqa.com/select-menu")

//     await page.selectOption("//div[text()='Select...']",[
//         {
//             label: "Black"
//         },{
//             index: "2"
//         },{

//         }
// ])

//  await page.waitForTimeout(3000);
    
// })
