import React from 'react';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ManagerContent() {
  const [members, setMembers] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch or simulate data for members
    const fetchDemoData = async () => {
      // Replace this with your actual data fetching logic
      const demoMembers = [
        {
          name: 'Carol Brown',
          image: 'https://picsum.photos/200/300', // Placeholder image
          email: 'carol.brown@example.com',
          joinedDate: '2023-10-05'
        },
        {
          name: 'David Garcia',
          image: 'https://picsum.photos/200/300', // Placeholder image
          email: 'david.garcia@example.com',
          joinedDate: '2023-11-10'
        },
        // ... add more members
      ];

      // Chart data (replace with your actual data)
      const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Tasks Completed',
            data: [25, 35, 45, 30, 50, 60],
            borderColor: 'rgb(53, 162, 235)',
            tension: 0.4,
          },
        ],
      };

      setMembers(demoMembers);
      setChartData(chartData);
    };

    fetchDemoData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Manager Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Member List */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Members</h2>
            <ul className="list-none">
              {members.map((member) => (
                <li key={member.email} className="flex items-center mb-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <span className="font-medium">{member.name}</span>
                    <br />
                    <span className="text-gray-600">{member.email}</span>
                    <br />
                    <span className="text-gray-600">Joined: {member.joinedDate}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo Chart */}
          {chartData && (
            <div className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Task Completion</h2>
              <Line data={chartData} />
            </div>
          )}

          {/* Demo Card */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Activity</h2>
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/200/200" 
                alt="Activity Image"
                className="rounded-md w-48 h-48 mb-2"
              />
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla facilisi. Donec pulvinar, justo sit amet scelerisque 
                bibendum, quam libero condimentum elit, id rhoncus lectus 
                purus ac neque.
              </p>
            </div>
          </div>
        </div>

        {/* Additional content area (e.g., reports, tasks, etc.) */}
        {/* ... */}
      </div>
    </div>
  );
}

export default ManagerContent;