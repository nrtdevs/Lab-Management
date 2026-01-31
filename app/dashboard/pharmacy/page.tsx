'use client';

import { useState } from 'react';

export default function PharmacyPage() {
    const [activeTab, setActiveTab] = useState('connected');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pharmacy Management & Commission Tracking</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Connected pharmacies with revenue sharing transparency
                    </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm shadow-blue-500/30">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    ADD PHARMACY
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Connected Pharmacies"
                    value="3"
                    subtext="All Active"
                    iconColor="blue"
                    icon={
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    }
                />
                <StatsCard
                    title="This Month Referrals"
                    value="74"
                    subtext="+15% from last month"
                    subtextColor="text-green-600"
                    iconColor="purple"
                    icon={
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Total Commission"
                    value="₹20,112"
                    subtext="Current month"
                    iconColor="green"
                    icon={
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Pending Settlement"
                    value="₹7,112"
                    subtext="Awaiting payment"
                    subtextColor="text-orange-600"
                    iconColor="orange"
                    icon={
                        <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
            </div>

            {/* Tabs Navigation */}
            <div>
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <nav className="-mb-px flex space-x-8 overflow-x-auto">
                        {['connected', 'referrals', 'settlement'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors uppercase
                                    ${activeTab === tab
                                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
                                `}
                            >
                                {tab === 'connected' ? 'CONNECTED PHARMACIES' :
                                    tab === 'referrals' ? 'PRESCRIPTION REFERRALS' :
                                        'SETTLEMENT TRACKING'}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div>
                    {activeTab === 'connected' && <ConnectedPharmacies />}
                    {activeTab === 'referrals' && <PrescriptionReferrals />}
                    {activeTab === 'settlement' && <SettlementTracking />}
                </div>
            </div>
        </div>
    );
}

// Subcomponents

function ConnectedPharmacies() {
    const pharmacies = [
        { id: 'PH-001', name: 'MedPlus Pharmacy', location: 'Bandra West, Mumbai', phone: '+91 98765 11111', commissionModel: '12%', commissionType: 'Percentage', totalReferrals: 145, pendingSettlement: '₹18,500', status: 'Active' },
        { id: 'PH-002', name: 'Apollo Pharmacy', location: 'Andheri East, Mumbai', phone: '+91 98765 22222', commissionModel: '10%', commissionType: 'Percentage', totalReferrals: 98, pendingSettlement: '₹12,300', status: 'Active' },
        { id: 'PH-003', name: 'HealthKart Pharmacy', location: 'Powai, Mumbai', phone: '+91 98765 33333', commissionModel: '₹200', commissionType: 'Fixed per Prescription', totalReferrals: 67, pendingSettlement: '₹8,400', status: 'Active' }
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pharmacy</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Commission Model</th>
                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Referrals</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Settlement</th>
                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                        {pharmacies.map((pharmacy) => (
                            <tr key={pharmacy.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-bold text-gray-900 dark:text-white">{pharmacy.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">{pharmacy.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-gray-300">{pharmacy.location}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{pharmacy.phone}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-gray-900 dark:text-gray-300">{pharmacy.commissionModel}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{pharmacy.commissionType}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-gray-900 dark:text-gray-300">
                                    {pharmacy.totalReferrals}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-600 dark:text-orange-400">
                                    {pharmacy.pendingSettlement}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                                        {pharmacy.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-3">
                                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PrescriptionReferrals() {
    const referrals = [
        { id: 'RX-2401', patient: 'Amit Sharma', pharmacy: 'MedPlus Pharmacy', date: 'Jan 29, 2026', bill: '₹2,450', commission: '₹294', status: 'Fulfilled', settlement: 'Pending' },
        { id: 'RX-2402', patient: 'Priya Patel', pharmacy: 'Apollo Pharmacy', date: 'Jan 29, 2026', bill: '₹1,850', commission: '₹185', status: 'Fulfilled', settlement: 'Pending' },
        { id: 'RX-2403', patient: 'Rajesh Kumar', pharmacy: 'MedPlus Pharmacy', date: 'Jan 28, 2026', bill: '₹3,200', commission: '₹384', status: 'Fulfilled', settlement: 'Jan 28, 2026' },
        { id: 'RX-2404', patient: 'Sneha Reddy', pharmacy: 'HealthKart Pharmacy', date: 'Jan 28, 2026', bill: '₹1,500', commission: '₹200', status: 'In Progress', settlement: 'Pending' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prescription ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pharmacy</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bill Amount</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Commission</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Settlement</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                        {referrals.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{item.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.patient}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{item.pharmacy}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-gray-200">{item.bill}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 dark:text-green-400">{item.commission}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Fulfilled'
                                            ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                            : 'bg-orange-50 text-orange-700 border border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800'
                                        }`}>
                                        <svg className={`w-3 h-3 mr-1 ${item.status === 'Fulfilled' ? 'text-green-500' : 'text-orange-500'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.settlement === 'Pending' ? (
                                        <span className="text-orange-600 dark:text-orange-400 font-medium">Pending</span>
                                    ) : (
                                        <span className="text-green-600 dark:text-green-400 font-medium">{item.settlement}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function SettlementTracking() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Summaries */}
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Monthly Settlement Summary</h2>

                <SettlementCard
                    name="MedPlus Pharmacy"
                    details="32 prescriptions • Total Billing: ₹85,000"
                    commission="₹10,272"
                    settled="₹6,500"
                    pending="₹3,772"
                    progressBarWidth="60%"
                />
                <SettlementCard
                    name="Apollo Pharmacy"
                    details="24 prescriptions • Total Billing: ₹62,400"
                    commission="₹6,240"
                    settled="₹4,100"
                    pending="₹2,140"
                    progressBarWidth="65%"
                />
                <SettlementCard
                    name="HealthKart Pharmacy"
                    details="18 prescriptions • Total Billing: ₹42,000"
                    commission="₹3,600"
                    settled="₹2,400"
                    pending="₹1,200"
                    progressBarWidth="66%"
                />
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Settlement Actions</h2>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-4">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors shadow-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Request Settlement
                    </button>
                    <button className="w-full border border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/20 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        Download Statement
                    </button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Settlement Cycle</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Monthly (5th of every month)</div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Next Settlement Date</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">February 5, 2026</div>
                </div>
            </div>
        </div>
    )
}

function SettlementCard({ name, details, commission, settled, pending, progressBarWidth }: any) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{details}</p>
                </div>
                <div className="bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded text-xs font-bold dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                    Commission: {commission}
                </div>
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border-l-4 border-green-500">
                    <span className="block text-xs text-gray-500 dark:text-gray-400">Settled Amount</span>
                    <span className="block text-lg font-bold text-green-700 dark:text-green-400">{settled}</span>
                </div>
                <div className="flex-1 bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border-l-4 border-orange-500">
                    <span className="block text-xs text-gray-500 dark:text-gray-400">Pending Amount</span>
                    <span className="block text-lg font-bold text-orange-700 dark:text-orange-400">{pending}</span>
                </div>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: progressBarWidth }}></div>
            </div>
        </div>
    )
}

function StatsCard({ title, value, subtext, subtextColor, icon, iconColor }: any) {
    const bgClass =
        iconColor === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400' :
            iconColor === 'purple' ? 'bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400' :
                iconColor === 'green' ? 'bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400' :
                    'bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{title}</h3>
                    <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
                    <p className={`text-xs mt-1 font-medium ${subtextColor || 'text-gray-500 dark:text-gray-400'}`}>
                        {subtext}
                    </p>
                </div>
                <div className={`p-3 rounded-xl ${bgClass}`}>
                    {icon}
                </div>
            </div>
        </div>
    )
}
