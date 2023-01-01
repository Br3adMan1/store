import { itemJson } from "./itemJson.js";
import CreateNode from "./itemCreateNode.js";
export default function innerinfo(item,index)
{
    const obj =JSON.parse(itemJson);
    item.append(CreateNode(obj.items[index].img,"img"));
    item.append(CreateNode(obj.items[index].title,"p","Title: "));
    item.append(CreateNode(obj.items[index].description,"p","Description: "));
    item.append(CreateNode(obj.items[index].category,"p","Category: "));
    item.append(CreateNode(obj.items[index].price,"p","Price per Kg: "));
}

