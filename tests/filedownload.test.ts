import {expect, test} from "@playwright/test"




test("handling file download",async({page})=>{

await page.goto("https://demo.automationtesting.in/FileDownload.html");

await page.type("#textbox","File download test  demo");

await page.click("id=createTxt");

const [download] = await Promise.all([

    page.waitForEvent("download"),

    page.click("//a[@download='info.txt']")

   
])
    // const fileName =  download[0].suggestedFilename()

    // await download[0].saveAs(fileName)

    // console.log(fileName);


})

test("upload a file", async({page})=>{

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    await page.setInputFiles("//input[@type='file']",
    
    ["uploadItems/company.png","uploadItems/secondcompany.png"]);

    await page.waitForTimeout(3000);

    const [uploadFiles] = await Promise.all([

        page.waitForEvent("filechooser"),

        page.click("//input[@type='file']")

    ])

    const isMultiple = uploadFiles.isMultiple();  

    console.log(isMultiple)

    uploadFiles.setFiles(["uploadItems/company.png","uploadItems/secondcompany.png"])


})