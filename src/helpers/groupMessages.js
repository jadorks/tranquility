export const groupMessages = messages => {
    const finalArr = [];
  
    let currentArr = [];
    let currentAuthor = '';
    messages.forEach(m => {
      // If we are on a new author
      // This also works on the initial iteration because the value is initially empty string
      if (m.sender.username !== currentAuthor) {
        if (currentAuthor) {
          finalArr.push([...currentArr]);
        }
        currentArr.splice(0, currentArr.length); // empty the array
        currentArr.push(m);
        currentAuthor = m.sender.username;
      } else {
        currentArr.push(m);
      }
    });
  
    finalArr.push([...currentArr]);
  
    return finalArr;
  };