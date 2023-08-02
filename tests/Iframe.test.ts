import {expect, test} from "@playwright/test"

test("handling Iframe alerts",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const allframes = page.frames();

    console.log("No.of frames: "+allframes.length);

    const framename = page.frame("3body[data-new-gr-c-s-check-loaded='14.1115.0']")

    // if (framename != null){

    //     await framename.fill("","")
    // }

    await framename?.fill("input[name = 'name3']","Vigneswaran")

    await page.waitForTimeout(2000)
    
    
    })