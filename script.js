var textarea = document.getElementById('notes')
chrome.storage.local.get({notes: 'What are you doing?'}, function(items) {
    textarea.value = items.notes
})
textarea.addEventListener('keyup', function() {
  chrome.storage.local.set({'notes': textarea.value})
}, false)
