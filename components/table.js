import { Edit, Eye, Trash2 } from 'lucide-react';

export default function Table() {
    // Sample data - you can replace this with props or API data
    const tableData = [
        {
            id: 1,
            date: '20/07/2568',
            title: 'แอร์เสีย',
            reportStatus: 'รับ',
            problemStatus: 'กำลังแก้ไข',
            department: 'อาคารสถานที่',
            reportStatusColor: 'green',
            problemStatusColor: 'yellow'
        },
        {
            id: 2,
            date: '21/07/2568',
            title: 'ปัญหาเครือข่าย',
            reportStatus: 'ยังไม่รับ',
            problemStatus: 'รอดำเนินการ',
            department: 'เทคโนโลยีสารสนเทศ',
            reportStatusColor: 'red',
            problemStatusColor: 'red'
        },
        {
            id: 3,
            date: '22/07/2568',
            title: 'หลอดไฟเสีย',
            reportStatus: 'รับ',
            problemStatus: 'เสร็จสิ้น',
            department: 'อาคารสถานที่',
            reportStatusColor: 'green',
            problemStatusColor: 'green'
        }
    ];

    const getStatusBadge = (status, color) => {
        const colorClasses = {
            green: 'bg-green-100 text-green-800 border-green-200',
            yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
            red: 'bg-red-100 text-red-800 border-red-200'
        };

        return (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[color]}`}>
                {status}
            </span>
        );
    };

    const handleEdit = (id) => {
        console.log('Edit item:', id);
        // add your edit logic later nakub other fuc tion too
    };

    const handleView = (id) => {
        console.log('View item:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete item:', id);
    };

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-800">
                        <th className="px-6 py-4 text-left">
                            <span className="text-white font-semibold text-sm">วัน เดือน ปี</span>
                        </th>
                        <th className="px-6 py-4 text-left">
                            <span className="text-white font-semibold text-sm">หัวข้อ</span>
                        </th>
                        <th className="px-6 py-4 text-left">
                            <span className="text-white font-semibold text-sm">สถานะรายงาน</span>
                        </th>
                        <th className="px-6 py-4 text-left">
                            <span className="text-white font-semibold text-sm">สถานะปัญหา</span>
                        </th>
                        <th className="px-6 py-4 text-left">
                            <span className="text-white font-semibold text-sm">ฝ่ายที่รับผิดชอบ</span>
                        </th>
                        <th className="px-6 py-4 text-center">
                            <span className="text-white font-semibold text-sm">จัดการ</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {tableData.map((row, index) => (
                        <tr 
                            key={row.id} 
                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-200`}
                        >
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-gray-900 text-sm font-medium">{row.date}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-gray-900 text-sm font-medium">{row.title}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {getStatusBadge(row.reportStatus, row.reportStatusColor)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {getStatusBadge(row.problemStatus, row.problemStatusColor)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-gray-900 text-sm">{row.department}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center justify-center space-x-2">
                                    <button
                                        onClick={() => handleView(row.id)}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                                        title="ดูรายละเอียด"
                                    >
                                        <Eye size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleEdit(row.id)}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors duration-200"
                                        title="แก้ไข"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(row.id)}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                                        title="ลบ"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {/* Empty state */}
            {tableData.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-500 text-lg">ไม่มีข้อมูล</div>
                    <div className="text-gray-400 text-sm mt-2">ยังไม่มีรายการในระบบ</div>
                </div>
            )}
        </div>
    );
}