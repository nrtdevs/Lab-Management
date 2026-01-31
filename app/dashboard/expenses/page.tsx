'use client';

export default function ExpensesPage() {
    const expenses = [
        { category: 'Rent', amount: '₹45,000', date: 'Jan 1, 2026', location: 'City Clinic', status: 'Paid' },
        { category: 'Staff Salary', amount: '₹1,25,000', date: 'Jan 5, 2026', location: 'City Clinic', status: 'Paid' },
        { category: 'Equipment', amount: '₹28,000', date: 'Jan 12, 2026', location: 'City Clinic', status: 'Paid' },
        { category: 'Utilities', amount: '₹8,500', date: 'Jan 15, 2026', location: 'City Clinic', status: 'Pending' },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Expense Management</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Track clinic expenses and generate CA reports
                    </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm shadow-blue-500/30">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    ADD EXPENSE
                </button>
            </div>

            {/* Total Expense Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 font-sans tracking-tight">₹2,06,500</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">Total Expenses This Month</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Expense Table */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700/50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                                {expenses.map((expense, index) => (
                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 mr-3">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">{expense.category}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-gray-300">{expense.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{expense.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{expense.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${expense.status === 'Paid'
                                                    ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                                    : 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800'
                                                }`}>
                                                {expense.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column: Add Expense & Summary */}
                <div className="space-y-6">
                    {/* Add New Expense Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Add New Expense</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Category</label>
                                <select className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm">
                                    <option>Select Category</option>
                                    <option>Rent</option>
                                    <option>Staff Salary</option>
                                    <option>Equipment</option>
                                    <option>Utilities</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Amount</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                                    <input type="text" className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-7 pr-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Date</label>
                                <input type="text" placeholder="mm/dd/yyyy" className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Description</label>
                                <textarea rows={2} className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
                            </div>
                            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transaction-colors">
                                Add Expense
                            </button>
                        </form>
                    </div>

                    {/* Category Summary */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Category Summary</h2>
                        <div className="space-y-4">
                            <SummaryItem label="Rent" amount="₹45,000" percentage="22% of total" />
                            <SummaryItem label="Salaries" amount="₹1,25,000" percentage="60% of total" />
                            <SummaryItem label="Equipment" amount="₹28,000" percentage="13% of total" />
                            <SummaryItem label="Utilities" amount="₹8,500" percentage="4% of total" />

                            <button className="w-full mt-4 py-2 px-4 border border-blue-200 dark:border-blue-800 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                Generate CA Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SummaryItem({ label, amount, percentage }: any) {
    return (
        <div className="flex justify-between items-start">
            <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">{label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{percentage}</div>
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">{amount}</div>
        </div>
    )
}
