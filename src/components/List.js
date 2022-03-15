import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCopy } from "@fortawesome/free-solid-svg-icons";

function List(props) {
  console.log(props.urlList);
  return props.urlList.map((item, i) => (
    <div key={i} className="justify-content-between align-items-star">
      <ol className="list-group ">
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          key={item.id}
        >
          <div className="row justify-content-center listRow">
            <div className="col-sm-8">
              <div className="ms-2 me-auto">
                <div className="fw-bold text-wrap">{item.fullUrl}</div>
                {item.shortUrl}
              </div>
            </div>
            <div className="col-sm-1">
              <div class="tooltip">
                <p
                  onClick={() => {
                    props.copyToClip(item.id);
                    var tooltip = document.getElementById("myTooltip");
                    tooltip.innerHTML = "Copied: " + item.shortUrl;
                  }}
                  // add function to change tooltip
                  onMouseOut={() => {
                    var tooltip = document.getElementById("myTooltip");
                    tooltip.innerHTML = "Copy to clipboard";
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} className="faIcon" />
                  <span class="tooltiptext" id="myTooltip">
                    Copy to clipboard
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-1">
              <p onClick={() => props.removeListItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} className="faIcon" />
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  ));
}

export default List;
