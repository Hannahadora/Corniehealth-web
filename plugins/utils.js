export function clickOutside(id, callBack) {
  window.document.addEventListener("click", e => {
    const select = window.document.getElementById(id);
    let targetElement = e.target; // clicked element
    do {
      if (targetElement === select || targetElement.id?.includes(id)) {
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);
    callBack();
  });
}


// export function clickOutside(id: string, callBack: () => void) {
//   document.addEventListener("click", e => {
//     const select = document.getElementById(id);
//     let targetElement: any = e.target; // clicked element
//     do {
//       if (targetElement == select || targetElement.id?.includes(id)) {
//         return;
//       }
//       targetElement = targetElement.parentNode;
//     } while (targetElement);
//     callBack();
//   });
// }