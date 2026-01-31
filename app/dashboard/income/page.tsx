'use client';

export default function IncomePage() {
    const payouts = [
        { hospital: 'Apollo Hospital', amount: '₹1,85,000', dueDate: 'Feb 5, 2026', status: 'Pending', alert: '' },
        { hospital: 'Fortis Hospital', amount: '₹1,25,000', dueDate: 'Feb 3, 2026', status: 'Delayed', alert: 'Delayed by 2 days' },
        { hospital: 'City Clinic', amount: '₹65,000', dueDate: 'Jan 25, 2026', status: 'Received', alert: '' },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Income & Commission Tracking</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Multi-source income tracking with payout monitoring
                </p>
            </div>

            {/* Total Income Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 font-sans tracking-tight">₹7,38,000</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">Total Income This Month</div>
                <div className="flex items-center text-sm font-bold text-green-600 dark:text-green-400 mt-1">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +18% from last month
                </div>
            </div>

            {/* Income Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Income Breakdown</h2>

                <div className="space-y-6">
                    <BreakdownItem title="OPD Consultations" amount="₹2,45,000" percentage="35" color="blue" />
                    <BreakdownItem title="Surgeries" amount="₹4,20,000" percentage="60" color="green" />
                    <BreakdownItem title="Referral Commission" amount="₹45,000" percentage="6" color="purple" />
                    <BreakdownItem title="Implant Commission" amount="₹28,000" percentage="4" color="orange" />
                </div>
            </div>

            {/* Payout Tracking */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Payout Tracking</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Hospital</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Due Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                            {payouts.map((item, i) => (
                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{item.hospital}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-gray-300">{item.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-gray-300">{item.dueDate}</div>
                                        {item.alert && <div className="text-xs text-red-500 font-medium mt-0.5">{item.alert}</div>}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${item.status === 'Received'
                                                ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                                : item.status === 'Delayed'
                                                    ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
                                                    : 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800'
                                            }`}>
                                            {item.status === 'Delayed' && <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>}
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function BreakdownItem({ title, amount, percentage, color }: any) {
    const colorClass =
        color === 'blue' ? 'bg-blue-600' :
            color === 'green' ? 'bg-green-600' :
                color === 'purple' ? 'bg-purple-600' : 'bg-orange-500';

    return (
        <div>
            <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{amount}</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-1">
                <div className={`${colorClass} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{percentage}% of total income</div>
        </div>
    )
}
