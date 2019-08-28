import React, { useState, useEffect } from "react";
import { useTransition, a } from "react-spring";
import shuffle from "lodash/shuffle";
import useMeasure from "./useMeasure";
import useMedia from "./useMedia";
import "antd/dist/antd.css";

import "./App.css";
import { Modal, Button, Menu, Dropdown, Icon, message } from "antd";

import * as Math from "mathjs";
import axios from "axios";

function App() {
  useEffect(() => {
    getImage();
  }, []);
  const [items, set] = useState([]);
  async function getImage() {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      let image = response.data;

      for (var i in image) {
        let x = "https://picsum.photos/id/";
        let y = image[i].id;
        let v = image[i].width;
        image[i].author = `${x}${y}/${v}/${image[i].height}`;
        image[i].height = Math.floor(Math.random() * 650) + 300;
        let z = image[i].height;

        image[i].download_url = `url(${x}${y}/${v}/${z})`;
      }
      set(image);
    } catch (error) {
      console.error(error);
    }
  }
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );

  // Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hold items and shuffle them every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 60000), []);

  // Form a grid of stacked items
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return {
      ...child,
      xy,
      width: width / columns,
      height: child.height / 2
    };
  });
  // Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.download_url, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });
  var storedTodo = JSON.parse(localStorage.getItem("select")) || [];
  const [select, setSelect] = useState(storedTodo);
  useEffect(() => {
    localStorage.setItem("select", JSON.stringify(select));
  }, [select]); //saving in local storage

  const imageSelect = e => {
    const item = e.target.id;
    console.log(select);
    if (select.includes(item)) {
      let del = select.filter(select => {
        return select !== item;
      });
      setSelect(del);
    } else {
      setSelect(select => [...select, item]);
    }
  };
  const myFunction = e => {
    const items = e.target.value;

    var x = document.getElementById(items);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  };
  const download = e => {
    // fake server request, getting the file url as response
    var datas = e.target.id;
    axios({
      url: datas,
      method: "GET",
      responseType: "blob" // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.jpg");
      document.body.appendChild(link);
      link.click();
    });
  };
  const { confirm } = Modal;
  const showConfirm = e => {
    var data = e.target.id;
    //console.log(items);
    //console.log(data);
    //setSelect(del);
    confirm({
      title: "Do you want to delete these items?",
      onOk() {
        for (var i = 0; i < items.length - 1; i++) {
          if (items[i].id == data) {
            items.splice(i, 1);
          }
          set(items);
        }
      },
      onCancel() {}
    });
  };

  return (
    <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <a.div
          key={key}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest
          }}
        >
          {
            <div
              className={select.includes(item.id) ? "imagediv " : "nodiv "}
              style={{ backgroundImage: item.download_url }}
              onClick={imageSelect}
              id={item.id}
            >
              <Dropdown
                className="butt"
                overlay={
                  <Menu>
                    <Menu.Item key="new">
                      <a
                        href={item.author}
                        class="w3-bar-item w3-button"
                        target="_blank"
                      >
                        Open in new tab
                      </a>
                    </Menu.Item>
                    <Menu.Item key="download">
                      <a
                        id={item.author}
                        onClick={download}
                        class="w3-bar-item w3-button"
                      >
                        Download
                      </a>
                    </Menu.Item>
                    <Menu.Item key="delete">
                      <a
                        class="w3-bar-item w3-button"
                        id={item.id}
                        onClick={showConfirm}
                      >
                        Delete
                      </a>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button className="box">...</Button>
              </Dropdown>
              ,
            </div>
          }
        </a.div>
      ))}
    </div>
  );
}

export default App;
