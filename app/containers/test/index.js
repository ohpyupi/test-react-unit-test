import React, { useState } from "react";
import "./styles.scss";


export const ChildBox = ({ name, score, handleClick }) => {
    return (
        <div className="child-box" onClick={handleClick}>
            {name} ({score})
        </div>
    )
};

export const HorizontalScrollView = ({ items }) => {
    const baseItemMap = items.reduce((result, curr) => {
        result[curr.id] = Object.assign(curr, { score: 0 });
        return result;
    }, {});
    const [itemMap, setItemMap] = useState(baseItemMap);
    const generateHandleClick = (id) => () => {
        setItemMap(prevItemMap => {
            const item = prevItemMap[id];
            item.score += 1;
            return {
                ...prevItemMap,
                [id]: { ... item },   
            };
        });
    };
    const sortedItems = Object.values(itemMap).sort((a, b) => b.score - a.score);
    return (
        <div className="horizontal-scroll-view">
            {sortedItems.map((item) => <ChildBox key={item.id} {...item} handleClick={generateHandleClick(item.id)}/>)}
        </div>
    )
};

export const Test = () => {
    const items = [
        {
            id: 1,
            name: "Hello"
        },
        {
            id: 2,
            name: "World"
        },
        {
            id: 3,
            name: "Foo"
        },
    ];
    return (
    <div className="test-container">
        <HorizontalScrollView items={items}/>
    </div>
    )
};