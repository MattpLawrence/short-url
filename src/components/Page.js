import React, { useState } from "react";
import Navigation from "./Navigation";
import List from "./List";
import Form from "./Form";

function ShortUrl() {
  const [urlList, setUrlList] = useState([]);

  const addListItem = (item) => {
    // check to see if anything is coming back from input
    if (!item.fullUrl) {
      return;
    }

    // add item to top of the array
    const newList = [item, ...urlList];
    setUrlList(newList);
  };

  const removeListItem = (id) => {
    //look through array and add new array without the item matching the id
    const updateList = [...urlList].filter((item) => item.id !== id);

    setUrlList(updateList);
  };
  const copyToClip = (id) => {
    console.log("trigger");
    const clipItem = urlList.filter((item) => item.id == id);
    const clipVal = clipItem[0].shortUrl;

    navigator.clipboard.writeText(clipVal);
  };

  return (
    <div className="full">
      <Navigation />
      <div className="row align">
        <div className="row justify-content-center align">
          <div className="col-10 frmMain ">
            <h3 className="frmHeader">Enter Your URL</h3>
            <Form addListItem={addListItem} />
            <List
              urlList={urlList}
              removeListItem={removeListItem}
              copyToClip={copyToClip}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortUrl;
