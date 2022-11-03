import { HorizontalScrollView } from "./index";
import React from "react";
import { act } from 'react-dom/test-utils';
import ReactDOM from "react-dom";
import { expect } from "@jest/globals";

describe("HorizontalScrollView", () => {
    let container;

    beforeEach(() => {
        container = global.document.createElement("div");
        global.document.body.append(container)
    });

    afterEach(() => {
        global.document.body.removeChild(container);
        container = null;
    });

    it("renders empty if the items are an empty array", () => {
        act(() => {
            ReactDOM.render(<HorizontalScrollView items={[]}/>, container);
        });
        const horizontalScrollView = window.document.querySelector(".horizontal-scroll-view");
        const childBoxes = horizontalScrollView.querySelectorAll(".child-box");
        expect(horizontalScrollView).not.toBeUndefined();
        expect(childBoxes).toHaveLength(0);
    });

    it("renders child box components based on the items passed to it", () => {
        const items = [
            {
                id: 1,
                name: "hello"
            },
            {
                id: 2,
                name: "world"
            }
        ];
        act(() => {
            ReactDOM.render(<HorizontalScrollView items={items}/>, container);
        });
        const horizontalScrollView = window.document.querySelector(".horizontal-scroll-view");
        const childBoxes = horizontalScrollView.querySelectorAll(".child-box");
        expect(horizontalScrollView).not.toBeUndefined();
        expect(childBoxes).toHaveLength(2);
    });
});