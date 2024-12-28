// Do not run this as a js file in your code editor. This needs to be put in the appScript and run. (gmail/google)

//This will filter and then delete the emails that are after 'from:     , in the right hand assignment of the threadds variable.
function deleteEmails() {
    var threads = GmailApp.search('from:jobalerts-noreply@linkedin.com');
    var batchSize = 100;  // Adjust this number for optimal performance 
    for (var i = 0; i < threads.length; i += batchSize) {
      var batch = threads.slice(i, i + batchSize);
      for (var j = 0; j < batch.length; j++) {
        batch[j].moveToTrash(); // delete the email
      }
    }
  }

// note from creator. If you do use this, I would write the emails down or use a google sheet to do so then filter them effectively so that you don't need 
// to just keep running this over and over. I may add a function to block the from: ' ' threads I.P if possible.  Will update accordingly.
