// import fs from 'fs';
// import path from 'path';

//NEED TO: npm install got
import got from "got";

const dataURL = "https://dev-week11-a11.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1";

export async function get_all_ids() {
    let jsonString;

    try {
        jsonString = await got(dataURL);
        console.log(jsonString.body)
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    return jsonObj.map(
        function(item) {
            return {
                params: {
                    id: item.ID.toString()
                }
            };
        }
    );
}


export async function get_sorted_list() {
    let jsonString;

    try {
        jsonString = await got(dataURL);
        console.log(jsonString.body)
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    jsonObj.sort(
        function(a, b) {
            return a.post_title.localeCompare(b.post_title);
        }
    );


    return jsonObj.map(
        item => {
            return {
                id: item.ID.toString(),
                name: item.post_title
            }
        }
    );
}


export async function get_item_data(req_id) {
    let jsonString;

    try {
        jsonString = await got(dataURL);
        console.log(jsonString.body)
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    // find object value in array that has matching id
    let obj_match = jsonObj.filter(
        function(obj) {
            return obj.ID.toString() === req_id;
        }
    );

  return obj_match.length > 0 ? obj_match[0] : {};
}
