import React, { useState } from 'react';
import category from "../../utils/category.json";
import "./DropDown.scss"

const DropDown = (props) => {

    const [selectedLocationId, setSelectedLocationId] = useState(null);
    const [subDropdown, setSubDropdown] = useState([]);
    const location = category.data && category.data.locations

    const locationClicked = (id) => {
        setSelectedLocationId(id)
        let subDropdownSelected = location.filter(({ dealers_id }) => id === dealers_id);
        setSubDropdown(subDropdownSelected)
    }

    const subLocationClicked = (subMenuId) => props.selectedOption(selectedLocationId, subMenuId)

    const showSubMenu = () => {
        return (
            <ul className="dropdownBorder subdropdown">
                {
                    subDropdown.length && subDropdown[0].branches
                    &&
                    subDropdown[0].branches.map((branch, branchIndex) => {
                        return (
                            <li key={branchIndex} className="optionColor cursorPointer" value={branch.name} onClick={() => subLocationClicked(branch.branch_id)}>
                                {branch.name}
                            </li>
                        )
                    }
                    )
                }
            </ul>
        )
    }

    return (
        <ul className="dropdownBorder cursorPointer">
            {
                location && location.map((location, locationIndex) => {
                    return (
                        <li key={locationIndex} className="optionColor positionRelative" value={location.name} onClick={() => locationClicked(location.dealers_id)}>
                            {location.name}
                            {selectedLocationId === location.dealers_id && showSubMenu(subDropdown)}
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default DropDown;

