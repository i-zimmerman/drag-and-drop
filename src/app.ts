// importing namespace
// ts doesn't complain during compilation
// because we tell ts where to locate this type (namespace)
// but after compilation to js this connection is destroyed
// /// <reference  path="drag-drop-interfaces.ts"/>

// as long as we rely on the browser to import our files we should
// provide and extension .js removed for webpack
import _ from "lodash";
import "./app.css";
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

// you can split namespaces across multiple files
// but you can import namespace only in the same namespace

// wrap all the code above into namespace App {} and then it will work

// guaranteed to have the same object and only 1 instance

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

// d.ts -> declaration files
// don't contain any logic but instructions to TS,
// how something work in that package

// @package --> scoped package allows npm packages to be namespaced
// @react/http @react/some_package for example

// if package is name @angular you know that the package was published by angular team

declare var GLOBAL: any;
// use as a last resort, we tell TS that this var exists
// for example var in a script tag declared in html file and initialized
// before the bundle loads
