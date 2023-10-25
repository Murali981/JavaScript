// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field


// chrome://extensions/

// let myLeads = `["www.awesomelead.com"]` // When we add back ticks(`) then it will be converted to a string

let myLeads = []

// push will be worked only for arrays but if it is a string then the push method will give you a error

// So to convert a string to an array we have to use JSON.parse() method and then we can use push method

 // myLeads = JSON.parse(myLeads) // We have converted it to array (or) it has turned into proper array again

// myLeads.push("www.epiclead.com") // Now we can push the string "www.epiclead.com" into the myLeads array.
 
// console.log(myLeads)


// myLeads = JSON.stringify(myLeads) // Converting back to string again

// console.log(typeof myLeads) // It will print the typeof which means data type of myLeads as string



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

// 1. store the delete button in a deleteBtn variable

// Get the leads from local storage - PS: JSON.parse()
// store it in a variable , leadsFromLocalStorage
// Log out the variable

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// 1. Grab the SAVE TAB button and store it in a tabBtn variable

// 1. check if leadsFromLocalStorage is truthy which means it is not a NULL value
// 2. If so, set myLeads to it's value call renderLeads() function

const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [{url:"https://www.linkedin.com/in/per-harald-borgen/"}]


// 2. Listen for clicks on tabBtn . log Per's LinkedIn URL to the console

tabBtn.addEventListener("click", function() {
    // Grab the URL of the current tab
    // chrome.tabs.query({active:true,currentWindow:true},function(tabs) {
        // since only one tab should be active and in the current window at once 
        // the return variable should have only one entry
       // let activeTab = tabs[0]
       // let activeTabId = activeTab.id // or do whatever you need 

       chrome.tabs.query({active:true},{currentWindow : true},function(tabs) {
        console.log(tabs)
           // console.log(tabs[0].url)
          myLeads.push(tabs[0].url)
         localStorage.setItem("myLeads",JSON.stringify(myLeads))
           render(myLeads)

       } )




    } )
 



function render(leads) {
    let listItems = ""

   for(let i=0;i<leads.length;i++)
   {
      listItems += `
           <li>
      
               <a target='_blank' href = '${leads[i]}'> 
           
             ${leads[i]}
           </a>
      
        </li>`

      //The above code containing innerHTML can be broken down into 3 steps 
      // step 1 : create element
      // step 2 : set text content
      // step 3 : append to ul
      //const li = document.createElement("li")
      //li.textContent = myLeads[i]
      //ulEl.append(li)
   }
   ulEl.innerHTML = listItems

}


// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked , clear localStorage , myLeads and the DOM so that the user doesn't see any more leads on this unordered list

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// local storage stores everything in the form of strings and they have to be in the form of key-value pairs


// localStorage.setItem("myName","per Herald Borgen")

// let name = localStorage.getItem("myName")

// console.log(name)

// localStorage.clear()

// console.log(ulEl)

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) // You have pushed the new lead to the myLeads array
    //console.log(myLeads)
    inputEl.value = "" // We have cleared out the input field
    
     // Save the myLeads array to local storage
     // PS: remember JSON.stringify()

     localStorage.setItem("myLeads",JSON.stringify(myLeads)) // Here the key is "myLeads" and the value is myLeads variable and here 
     // we are setting items to local storage which means we are saving the items to local storage.

     render(myLeads)

     // To verify that it works :
     console.log(localStorage.getItem("myLeads"))
})



  // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"


function saveLead() {
    console.log("button clicked from onclick attribute")
}





