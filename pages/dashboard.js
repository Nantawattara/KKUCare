"use client";

import React from 'react';
import StatCard from '../components/StatCard';
import Table from '@/components/table';
import { motion } from 'framer-motion';

const UserDashboard = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">แดชบอร์ด</h1>
          <p className="text-gray-600">แสดงประวัติการรายงานและติดตามความคืบหน้า</p>
        </div>

        {/* Stats Cards */}
        <motion.div className="grid grid-cols-4 gap-6 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <StatCard title="จำนวนรายงาน" value="1247" icon="❗" />
          <StatCard title="ปัญหาที่แก้ไขแล้ว" value="20" icon="✅" />
          <StatCard title="ปัญหากำลังดำเนินนี้" value="2" icon="❓" />
          <StatCard title="ปัญหายังไม่ดำเนินนี้" value="2" icon="❎" />
        </motion.div >

        {/* Reports Table */}
        <Table />
      </div>
    </div>
  );
};

export default UserDashboard;