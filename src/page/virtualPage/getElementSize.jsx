
import ReactDOMServer from 'react-dom/server';


export const getElementSize = (element) => {
    const elementString = ReactDOMServer.renderToStaticMarkup(element);
    const elementDocument = new DOMParser().parseFromString(elementString, "text/html");
    const elementNode = (elementDocument).getRootNode().body.firstChild;
    const container = document.createElement("div");
    container.appendChild(elementNode);
    document.body.appendChild(container);
    const elementWidth = container.clientWidth;
    const elementHeight = container.clientHeight;
    container.removeChild(elementNode);
    document.body.removeChild(container);
    return {
      elementWidth,
      elementHeight
    };
  };


