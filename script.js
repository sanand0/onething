var textarea = document.getElementById('notes')
chrome.storage.local.get({notes: 'What are you doing?'}, function(items) {
    textarea.value = items.notes
})
textarea.addEventListener('keyup', function(e) {
  var win = chrome.app.window.current()
  chrome.storage.local.set({'notes': textarea.value})
  if (e.ctrlKey && e.keyCode == 84)
    win.setAlwaysOnTop(!win.isAlwaysOnTop())
}, false)
