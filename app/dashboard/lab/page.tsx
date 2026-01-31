'use client';

import { useState } from 'react';

export default function LabPage() {
    const [activeTab, setActiveTab] = useState('Connected Labs');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Lab & Diagnostic Management</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Test referrals with transparent commission tracking
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        NEW TEST REQUEST
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm shadow-blue-500/30">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        ADD LAB
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard title="Connected Labs" value="3" subtext="All Active" color="blue" icon="flask" />
                <StatsCard title="This Month Tests" value="111" subtext="+22% from last month" color="purple" icon="clipboard" />
                <StatsCard title="Total Commission" value="₹71,934" subtext="Current month" color="green" icon="currency" />
                <StatsCard title="Pending Settlement" value="₹25,834" subtext="Awaiting payment" color="orange" icon="clock" />
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8">
                    {['Connected Labs', 'Test Referrals', 'Settlement Tracking'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                                ${activeTab === tab
                                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
                            `}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden min-h-[400px]">
                {activeTab === 'Connected Labs' && <ConnectedLabsTable />}
                {activeTab === 'Test Referrals' && <TestReferralsTable />}
                {activeTab === 'Settlement Tracking' && <SettlementTracking />}
            </div>
        </div>
    );
}

function StatsCard({ title, value, subtext, color, icon }: any) {
    const bgClass =
        color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
            color === 'purple' ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400' :
                color === 'green' ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
                    'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400';

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex justify-between items-start">
            <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{subtext}</div>
            </div>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${bgClass}`}>
                <div className="font-bold text-lg">
                    {icon === 'flask' && '🧪'}
                    {icon === 'clipboard' && '📄'}
                    {icon === 'currency' && '₹'}
                    {icon === 'clock' && '⏳'}
                </div>
            </div>
        </div>
    )
}

function ConnectedLabsTable() {
    const labs = [
        { name: 'PathLab Diagnostics', location: 'Bandra, Mumbai', specialization: 'Complete Diagnostics', commission: '15%', referrals: '186', settlement: '₹28,900', status: 'Active' },
        { name: 'Dr. Lal PathLabs', location: 'Andheri, Mumbai', specialization: 'Pathology & Radiology', commission: '18%', referrals: '142', settlement: '₹35,600', status: 'Active' },
        { name: 'Metropolis Healthcare', location: 'Powai, Mumbai', specialization: 'Advanced Imaging', commission: '₹300', note: 'Fixed per Test', referrals: '98', settlement: '₹16,400', status: 'Active' },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lab Name</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Specialization</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Commission Model</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Referrals</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Settlement</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                    {labs.map((lab, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                        <span className="text-lg">🔬</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">{lab.name}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">LAB-{String(index + 1).padStart(3, '0')}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-white">{lab.location}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">+91 98765 44444</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                {lab.specialization}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900 dark:text-white">{lab.commission}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{lab.note || 'Percentage'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                                {lab.referrals}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-600 dark:text-orange-400">
                                {lab.settlement}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                                    {lab.status}
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
    )
}

function TestReferralsTable() {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Quick Test Request</h3>
                <div className="flex flex-wrap gap-3">
                    {['Blood Tests', 'X-Ray', 'MRI Scan', 'CT Scan', 'Ultrasound', 'Bone Density Scan', 'Pathology Tests'].map(test => (
                        <button key={test} className="px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            {test}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Test ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Test Name</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lab</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Test Cost</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Commission</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                        <TestRow
                            id="TEST-2401" patient="Amit Sharma" test="Knee X-Ray (AP/Lateral)" lab="PathLab Diagnostics"
                            date="Jan 29, 2026" cost="₹1,200" commission="₹180" status="Report Ready"
                        />
                        <TestRow
                            id="TEST-2402" patient="Priya Patel" test="MRI Knee" lab="Dr. Lal PathLabs"
                            date="Jan 28, 2026" cost="₹8,500" commission="₹1,530" status="Report Ready"
                        />
                        <TestRow
                            id="TEST-2403" patient="Rajesh Kumar" test="Blood Test (CBC, ESR)" lab="PathLab Diagnostics"
                            date="Jan 28, 2026" cost="₹850" commission="₹128" status="Report Ready"
                        />
                        <TestRow
                            id="TEST-2404" patient="Sneha Reddy" test="Hip X-Ray" lab="Metropolis Healthcare"
                            date="Jan 27, 2026" cost="₹1,100" commission="₹300" status="Sample Collected"
                        />
                        <TestRow
                            id="TEST-2405" patient="Vikram Joshi" test="CT Scan Spine" lab="Dr. Lal PathLabs"
                            date="Jan 27, 2026" cost="₹6,800" commission="₹1,224" status="Report Ready"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function TestRow({ id, patient, test, lab, date, cost, commission, status }: any) {
    const statusClass = status === 'Report Ready'
        ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400'
        : 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400';

    return (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{patient}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600 dark:text-gray-300">{test}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">{lab}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">{date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{cost}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 dark:text-green-400">{commission}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusClass}`}>
                    {status === 'Report Ready' && <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
                <button className="text-gray-400 hover:text-blue-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

function SettlementTracking() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            <div className="lg:col-span-2 space-y-6">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Monthly Settlement Summary</h3>
                <SettlementCard
                    lab="PathLab Diagnostics" tests="45 Tests" billing="₹1,20,500"
                    settled="₹12,500" pending="₹6,790" commission="19,250"
                    progress={65} color="green"
                />
                <SettlementCard
                    lab="Dr. Lal PathLabs" tests="38 Tests" billing="₹2,45,600"
                    settled="₹28,000" pending="₹16,244" commission="44,244"
                    progress={50} color="green"
                />
                <SettlementCard
                    lab="Metropolis Healthcare" tests="20 Tests" billing="₹85,400"
                    settled="₹5,600" pending="₹2,800" commission="8,400"
                    progress={75} color="green"
                />
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Settlement Actions</h3>
                    <button className="w-full mb-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Request Settlement
                    </button>
                    <button className="w-full py-2.5 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        Download Statement
                    </button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 space-y-3">
                    <div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 uppercase font-bold">Settlement Cycle</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Bi-weekly (1st & 15th)</div>
                    </div>
                    <div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 uppercase font-bold">Next Settlement Date</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">February 1, 2026</div>
                    </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2 text-orange-700 dark:text-orange-400 font-bold text-xs uppercase">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Commission Transparency
                    </div>
                    <p className="text-xs text-orange-800 dark:text-orange-300 leading-relaxed">
                        All commission rates are pre-agreed with labs. Patients get the same test price regardless of referral.
                    </p>
                </div>
            </div>
        </div>
    )
}

function SettlementCard({ lab, tests, billing, settled, pending, commission, progress }: any) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{lab}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{tests} • Total Billing: {billing}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">
                    Commission: ₹{commission}
                </div>
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-800/50">
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Settled Amount</div>
                    <div className="text-lg font-bold text-green-700 dark:text-green-400">{settled}</div>
                </div>
                <div className="flex-1 bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border border-orange-100 dark:border-orange-800/50">
                    <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">Pending Amount</div>
                    <div className="text-lg font-bold text-orange-700 dark:text-orange-400">{pending}</div>
                </div>
            </div>

            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}
