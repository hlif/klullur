import { baseurl } from "./index"

export const getCategories = () => {
    let url = `${baseurl}/api/v1/categories`;

    return fetch(url, {
        method: "GET",
    }).then((res) => res.json())
};