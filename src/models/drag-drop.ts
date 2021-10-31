// ts feature
// only exists in the typescript world
// ts doesn't complain during compilation
// because we tell ts where to locate this type (namespace)
// but after compilation to js this connection is destroyed
// namespace App {
//   // Drag and Drop interfaces
//   export interface Draggable {
//     dragStartHandler(event: DragEvent): void;
//     dragEndHandler(event: DragEvent): void;
//   }

//   export interface DragTarget {
//     dragOverHandler(event: DragEvent): void;
//     dropHandler(event: DragEvent): void;
//     // if user leaves, or cancells drop
//     dragLeaveHandler(event: DragEvent): void;
//   }
// }

// use modules!
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  // if user leaves, or cancells drop
  dragLeaveHandler(event: DragEvent): void;
}
