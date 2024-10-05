//         onDragOver={handleDragOver} // Allow dropping in this area

// // const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault(); // Prevent default to allow drop


// };


// const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const title = event.dataTransfer.getData('text/plain'); // Get the title of the dragged video
//     console.log('Dropped video title:', title);
//     // You can now handle the drop logic (e.g., rearranging videos or whatever action you need)
//     // this method would also have to trigger the recommended videos refresh 
// };

// <div onDrop={handleDrop}