import React, { useState } from 'react'
// import Add from "./Add/Add";
// import { Board } from "./Board/Board";
// import Card from "./Column/Column";
// import Header from "./Header/Header";
// import Item from "./Item/Item";
// import _data from "./data.json";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// export default {
//   title: "Kanban",
// };

// // export const card = () => {
// //   const [items, setItems] = useState([
// //     { value: 'item1', id: '0' },
// //     { value: 'item2', id: '1' },
// //     { value: 'item3', id: '2' },
// //     { value: 'item4', id: '3' },
// //     { value: 'item5', id: '4' },
// //   ])
// //   return <Card index={0} header={'Card'} items={items} setItems={setItems} color="var(--primary)" />
// // }
// // export const item = () => <Item value={'foo'} id={'0'} />
// // export const header = () => <Header text="In Progress" color="var(--primary)" itemCount={3} />
// // export const add = () => <Add text="Add new" color="var(--text200)" />
// export const board = () => {
//   const [data, setData] = useState(_data[0]);
//   const [editList, setEditList] = useState<string[]>([]);

//   return (
//     <Board
//       _id={data._id}
//       columns={data.columns}
//       setColumns={setData}
//       title={data.title}
//       projectId={data.projectId}
//       createdAt={data.createdAt}
//       updatedAt={data.updatedAt}
//       i18n={{ addNew: "Add new", remove: "Remove", edit: "Edit" }}
//       editList={editList}
//     />
//   );
// };
