chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html",
    {  frame: "none",
       id: "OneThing",
       innerBounds: {
         width: 360,
         height: 300,
         left: 600,
         minWidth: 200,
         minHeight: 20
      }
    }
  );
});
