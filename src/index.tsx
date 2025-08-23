import { definePlugin } from "@decky/api";
import {
    staticClasses
} from "@decky/ui";
import { FaMusic } from "react-icons/fa";

export default definePlugin(() => {
    return {
        name: "Project Artemis",
        titleView: <div className={staticClasses.Title}>Project Artemis</div>,
        content: (
            <>
                <p>Juhuu</p>
            </>
        ),
        icon: <FaMusic />
    }
})