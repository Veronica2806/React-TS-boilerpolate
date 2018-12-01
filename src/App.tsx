import * as React from "react";
import "./style.css"


declare var module: any;
interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => <h1 className="myclass">Hello from {props.compiler} and {props.framework}!</h1>;

(module).exports = Hello;

// export namespace USER_MODEL {
//     export enum USER_ACTIONS {
//         online = 'online',
//         offline = 'offline',
//         kakat = 'poshel kakat'
//     }
//
//     export interface User {
//         name: string,
//         surname: string
//     }
// }
//
// function userInfo(user: User) {
//     switch (USER_MODEL.USER_ACTIONS) {
//         case USER_MODEL.USER_ACTIONS.online: {
//
//         }
//     }
// }








