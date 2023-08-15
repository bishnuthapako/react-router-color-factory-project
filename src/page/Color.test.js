import { Screen, render } from "@testing-library/react";
import Color from "../page/Color";
import { MemoryRouter } from "react-router-dom";

test("renders without crashing", ()=>{
    render(
        <MemoryRouter>
            <Color />
        </MemoryRouter>
    )
})