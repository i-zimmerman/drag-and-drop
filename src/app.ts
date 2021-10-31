// importing namespace
// ts doesn't complain during compilation
// because we tell ts where to locate this type (namespace)
// but after compilation to js this connection is destroyed
// /// <reference  path="drag-drop-interfaces.ts"/>

// as long as we rely on the browser to import our files we should
// provide and extension .js removed for webpack
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
