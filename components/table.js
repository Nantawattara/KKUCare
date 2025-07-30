export default function Table() {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-4 py-2">
                        <span className="text-white">วัน เดือน ปี</span>
                    </th>
                    <th className="px-4 py-2">
                        <span className="text-white">หัวข้อ</span>
                    </th>
                    <th className="px-4 py-2">
                        <span className="text-white">สถานะรายงาน</span>
                    </th>
                    <th className="px-4 py-2">
                        <span className="text-white">สถานะปัญหา</span>
                    </th>
                    <th className="px-4 py-2">
                        <span className="text-white">ฝ่ายที่รับผิดชอบ</span>
                    </th>
                    <th className="px-4 py-2">
                        <span className="text-white">จัดการ</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-4 py-2 flex-row items-center">
                        <span className="text-gray-800">20/07/2568</span>
                    </td>
                    <td className="px-4 py-2 flex-row items-center">
                        <span className="text-gray-800">แอร์เสีย</span>
                    </td>
                    <td className="px-4 py-2 flex-row items-center">
                        <span className="border bg-green-100 rounded-md text-gray-800">รับ</span>
                    </td>
                    <td className="px-4 py-2 bg-yellow-100 flex-row items-center">
                        <span className="text-gray-800">กำลังแก้ไข</span>
                    </td>
                    <td className="px-4 py-2 flex-row items-center">
                        <span className="text-gray-800">อาคารสถานที่</span>
                    </td>
                    <td className="px-4 py-2 flex-row items-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            <span>แก้ไข</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}