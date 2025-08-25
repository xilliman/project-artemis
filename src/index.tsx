import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  Navigation,
  ToggleField,
  staticClasses,
  SliderField
} from "@decky/ui";
import {
  addEventListener,
  removeEventListener,
  callable,
  definePlugin,
  toaster,
  // routerHook
} from "@decky/api"
import { useState } from "react";


import { FaMusic } from "react-icons/fa";

// // import logo from "../assets/logo.png";

// // This function calls the python function "add", which takes in two numbers and returns their sum (as a number)
// // Note the type annotations:
// //  the first one: [first: number, second: number] is for the arguments
// //  the second one: number is for the return value
// const add = callable<[first: number, second: number], number>("add");

// // This function calls the python function "start_timer", which takes in no arguments and returns nothing.
// // It starts a (python) timer which eventually emits the event 'timer_event'
// const startTimer = callable<[], void>("start_timer");

// function Content() {
//   const [result, setResult] = useState<number | undefined>();

//   const onClick = async () => {
//     console.log("Click")

//     const result = await add(Math.random(), Math.random());
//     setResult(result);
//   };

//   return (
//     <>
//       <PanelSection title="Einstellungen">
//         <PanelSectionRow>
//           <ToggleField label="Shuffle" checked={true}></ToggleField>
//         </PanelSectionRow>
//       </PanelSection>
//     </>
//     // <PanelSection title="Panel Section">
//     //   <PanelSectionRow>
//     //     <ButtonItem
//     //       layout="below"
//     //       onClick={onClick}
//     //     >
//     //       {result ?? "Add two numbers via Python"}
//     //     </ButtonItem>
//     //   </PanelSectionRow>
//     //   <PanelSectionRow>
//     //     <ButtonItem
//     //       layout="below"
//     //       onClick={() => startTimer()}
//     //     >
//     //       {"Start Python timer"}
//     //     </ButtonItem>
//     //   </PanelSectionRow>
//     // </PanelSection>
//   );
// };

// export default definePlugin(() => {
//   console.log("Template plugin initializing, this is called once on frontend startup")

//   // serverApi.routerHook.addRoute("/decky-plugin-test", DeckyPluginRouterTest, {
//   //   exact: true,
//   // });

//   // Add an event listener to the "timer_event" event from the backend
//   const listener = addEventListener<[
//     test1: string,
//     test2: boolean,
//     test3: number
//   ]>("timer_event", (test1, test2, test3) => {
//     console.log("Template got timer_event with:", test1, test2, test3)
//     toaster.toast({
//       title: "template got timer_event",
//       body: `${test1}, ${test2}, ${test3}`
//     });
//   });

//   return {
//     // The name shown in various decky menus
//     name: "Test Plugin",
//     // The element displayed at the top of your plugin's menu
//     titleView: <div className={staticClasses.Title}>project-artemis IV</div>,
//     // The content of your plugin's menu
//     content: <Content />,
//     // The icon displayed in the plugin list
//     icon: <FaMusic />,
//     // The function triggered when your plugin unloads
//     onDismount() {
//       console.log("Unloading")
//       removeEventListener("timer_event", listener);
//       // serverApi.routerHook.removeRoute("/decky-plugin-test");
//     },
//   };
// });


type Prefs = { shuffle: boolean, volume: number }

export default definePlugin(() => {

  // const [state, setState] = useState<Prefs>({ shuffle: false, volume: 19 })

  return {
    // The name shown in various decky menus
    name: "Test Plugin",
    // The element displayed at the top of your plugin's menu
    titleView: <div className={staticClasses.Title}>project-artemis IV</div>,
    // The content of your plugin's menu
    content: (
      <>
        <PanelSection title="Einstellungen">
          <PanelSectionRow>
            <ToggleField label="Shuffle" 
              // checked={state.shuffle} 
              description="Automatically shuffle OSTs" 
              // onChange={(b) => setState(p => ({...p, shuffle: b}))}
              />
          </PanelSectionRow>
          <PanelSectionRow>
            <SliderField label= {`Volume: ${Math.round(19)}%`}
              value={19}
              min={0}
              max={100}
              step={1}
              showValue={true}
              // onChange={(v) => setState(p => ({ ...p, volume: v }))} 
              />
          </PanelSectionRow>
        </PanelSection>
      </>
    ),
    // The icon displayed in the plugin list
    icon: <FaMusic />,
    // The function triggered when your plugin unloads
    onDismount() {
      console.log("Unloading")
    },
  };
})