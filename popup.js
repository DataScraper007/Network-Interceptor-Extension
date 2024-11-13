// // popup.js
// const submitButton = document.getElementById("submitName");
// const nameInput = document.getElementById("nameInput");
// const resultDiv = document.getElementById("result");

// submitButton.addEventListener("click", () => {
//   const url = nameInput.value;

//   if (url) {
//     // Notify the user that we're waiting for a response
//     resultDiv.textContent = `Waiting for response from: ${url}`;

//     // Send the URL to the background script to start intercepting the request
//     chrome.runtime.sendMessage({
//       action: 'interceptRequest',
//       url: url
//     });
//   } else {
//     resultDiv.textContent = "Please enter a valid URL.";
//   }
// });

// // Listen for the message from background.js
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action === 'networkResponse') {
//     console.log("Received network response:", message.response);

//     // Display the response in the result div
//     resultDiv.textContent = `Response from ${message.url}:\nStatus Code: ${message.status}\nResponse: ${JSON.stringify(message.response)}`;
//   }
// });



document.getElementById("submitName").addEventListener("click", function() {
  const url = document.getElementById("nameInput").value;
  
  // Send the URL to the background script to get the stored response
  chrome.runtime.sendMessage({ action: 'getResponse', url: url }, function(response) {
    if (response.success) {
      document.getElementById("result").innerText = JSON.stringify(response.response, null, 2);
    } else {
      document.getElementById("result").innerText = response.message;
    }
  });
});

