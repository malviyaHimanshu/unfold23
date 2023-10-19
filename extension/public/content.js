chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message received from the extension popup button");
    console.log(request);
    //console.log(getTextFromImage(request.document));
    if (request.action === "printDOM") {
      //printDOM();
    }
    console.log(document.getElementsByTagName('button')[0]);
    // document.getElementsByTagName('button')[0].addEventListener('click', () => {
    //   openReactAppTab(request.document);
    // });
    // send a message to the created tab
    //openReactAppTab(request.document);
    console.log("React app tab opened");
    const res = async() =>{
      await sendBase64(request.document);
    }
    res();
    sendResponse({msg: "Message received"});
  });