import { LineChart, Line } from 'recharts';

const LineChats = () => {
   const students = [
      { id: 1, name: "John", math: 80, physics: 75, chemistry: 85 },
      { id: 2, name: "Alice", math: 75, physics: 70, chemistry: 80 },
      { id: 3, name: "Bob", math: 85, physics: 80, chemistry: 22 },
      { id: 4, name: "Emma", math: 90, physics: 85, chemistry: 33 },
      { id: 5, name: "David", math: 70, physics: 65, chemistry: 75 },
      { id: 6, name: "Sophia", math: 95, physics: 10, chemistry: 10 },
      { id: 7, name: "Olivia", math: 65, physics: 60, chemistry: 70 },
      { id: 8, name: "James", math: 88, physics: 82, chemistry: 86 },
      { id: 9, name: "Ella", math: 72, physics: 68, chemistry: 78 },
      { id: 10, name: "William", math: 82, physics: 78, chemistry: 85 }
    ];
   return (
      <div>
         <LineChart width={500} height={600} data={students}> 
            <Line dataKey='math' stroke=''></Line>
            <Line dataKey='physics'></Line>
            <Line dataKey='chemistry'></Line>
         </LineChart>
      </div>
   );
};

export default LineChats;