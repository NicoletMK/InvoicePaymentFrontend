import React, { useState } from "react";
import {
    Menu as AntMenu,
    Dropdown as AntDropdown,
    Button as AntButton,
  } from "antd";
import { DownOutlined } from "@ant-design/icons";

function DropdownMenu() {
    const [selectedOption, setSelectedOption] = useState("USD");
  
    const handleMenuClick = (e) => {
      const selectedValue = e.item.props.value;
      setSelectedOption(selectedValue);
    };
  
    return (
      <AntDropdown
        overlay={
          <AntMenu onClick={handleMenuClick}>
            {[
              { value: "USD" },
              { value: "EUR" },
              { value: "RMB" },
              { value: "INR" },
            ].map((option, index) => (
              <AntMenu.Item key={index} value={option.value}>
                <a onClick={(e) => e.preventDefault()}>{option.value || ""}</a>
              </AntMenu.Item>
            ))}
          </AntMenu>
        }
        placement="bottomLeft"
        trigger={["hover"]}
        arrow={true}
      >
        <AntButton onClick={(e) => e.preventDefault()}>
          {selectedOption ? `${selectedOption} ` : "USD"}
          <DownOutlined />
        </AntButton>
      </AntDropdown>
    );
  }
  

export default DropdownMenu;
