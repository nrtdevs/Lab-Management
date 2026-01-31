'use client';

export default function BillingPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Billing & Insurance</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Surgery cases and insurance notifications
                    </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm shadow-blue-500/30">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    NEW CASE
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Surgery Cases */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Recent Surgery Cases</h2>

                    <CaseCard
                        name="Ramesh Gupta"
                        procedure="Total Knee Replacement"
                        hospital="Apollo Hospital"
                        date="Jan 30, 2026"
                        amount="₹3,50,000"
                        status="Pending"
                        statusColor="orange"
                    />

                    <CaseCard
                        name="Meera Singh"
                        procedure="ACL Reconstruction"
                        hospital="Fortis Hospital"
                        date="Jan 28, 2026"
                        amount="₹2,25,000"
                        status="Approved"
                        statusColor="green"
                    />
                </div>

                {/* Create Surgery Case Form */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Create Surgery Case</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Patient</label>
                            <select className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option>Select Patient</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Procedure</label>
                            <input
                                type="text"
                                className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Surgery Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="mm/dd/yyyy"
                                    className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hospital</label>
                            <select className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option>Select Hospital</option>
                            </select>
                        </div>

                        <div className="pt-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fee Structure</label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Surgeon Fee</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                                        <input type="text" className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-7 pr-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Assistant Fee</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                                        <input type="text" className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-7 pr-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Total Amount</span>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                                    <input type="text" className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-7 pr-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 space-y-3">
                            <button type="button" className="w-full flex justify-center items-center py-2.5 px-4 border border-blue-300 dark:border-blue-700 rounded-lg shadow-sm text-sm font-medium text-blue-700 dark:text-blue-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                Attach Insurance Documents
                            </button>
                            <button type="submit" className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                Create & Notify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function CaseCard({ name, procedure, hospital, date, amount, status, statusColor }: any) {
    const borderClass = statusColor === 'orange' ? 'border-orange-500' : 'border-green-500';
    const textClass = statusColor === 'orange' ? 'text-orange-600' : 'text-green-600';

    return (
        <div className={`bg-white dark:bg-gray-800 border overflow-hidden rounded-xl shadow-sm border-gray-200 dark:border-gray-700`}>
            <div className={`flex border-l-4 ${borderClass} p-6`}>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{procedure}</p>

                    <div className="flex gap-2 mt-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {hospital}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {date}
                        </span>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide hover:text-blue-700 transition-colors">
                            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            Attach Documents
                        </button>
                        <button className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide hover:text-blue-700 transition-colors">
                            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Notify Billing
                        </button>
                    </div>
                </div>

                <div className="text-right">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{amount}</div>
                    <div className={`text-sm font-bold ${textClass} mt-1`}>{status}</div>
                </div>
            </div>
        </div>
    )
}
