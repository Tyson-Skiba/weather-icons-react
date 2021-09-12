const fallbackCopyTextToClipboard = (text: string, onComplete?: (success?: boolean) => void) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      if (onComplete) onComplete(successful);
    } catch (err) {
      if (onComplete) onComplete(false);
    }
  
    document.body.removeChild(textArea);
}


export const copyTextToClipboard = (text: string, onComplete?: (success?: boolean) => void) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text, onComplete);
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      if (onComplete) onComplete(true);
    }, err => {
      if (onComplete) onComplete(false);
    });
}
