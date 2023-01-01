import CreateNode from "./itemCreateNode.js";
import { itemJson } from "./itemJson.js";
import innerinfo from "./itemInnerInfo.js";
export default function Item(id)
{
    const item = document.createElement("div");
    item.setAttribute("id","item");
    // Create new link Element
    const link = document.createElement('link');
    innerinfo(item,0);

    // set the attributes for link element
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = 'components/item/style.item.css';

    // Append link element to HTML head
    item.appendChild(link);
    return item;
}