
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let newParagraph = document.createElement("p");
  let elementChildren = Array.from(htmlElement.children);
  if (elementChildren.length > 0) {
    htmlElement.removeChild()
  }
  newParagraph.append(string);
  htmlElement.append(newParagraph);
};

htmlGenerator('Party Time.', partyHeader);

