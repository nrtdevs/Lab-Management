'use client';

export default function WhatsappPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">WhatsApp Communication Engine</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Automated & manual message orchestration
                    </p>
                </div>
                <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm shadow-emerald-700/30">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    SEND MESSAGE
                </button>
            </div>

            {/* Search */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm shadow-sm"
                    placeholder="Search messages..."
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Content - Recent Messages */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Messages</h2>

                    <MessageCard
                        initials="AS"
                        name="Amit Sharma"
                        subtext="Prescription"
                        message="Prescription sent for Knee consultation"
                        time="10:45 AM"
                        status="Delivered"
                        statusColor="green"
                    />
                    <MessageCard
                        initials="PP"
                        name="Priya Patel"
                        subtext="Appointment Reminder"
                        message="Reminder: Your appointment is tomorrow at 11:00 AM"
                        time="09:30 AM"
                        status="Delivered"
                        statusColor="green"
                    />
                    <MessageCard
                        initials="RK"
                        name="Rajesh Kumar"
                        subtext="Follow-up"
                        message="Follow-up reminder sent"
                        time="Yesterday"
                        status="Read"
                        statusColor="blue"
                    />
                    <MessageCard
                        initials="SR"
                        name="Sneha Reddy"
                        subtext="Surgery Details"
                        message="Surgery scheduled for Feb 3, 2026"
                        time="2 hours ago"
                        status="Pending"
                        statusColor="orange"
                    />
                </div>

                {/* Sidebar - Stats & Templates */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
                        <div className="space-y-4">
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/50 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-green-700 dark:text-green-400">156</div>
                                <div className="text-sm font-medium text-green-800 dark:text-green-300 mt-1">Messages Sent Today</div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-blue-700 dark:text-blue-400">98%</div>
                                <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mt-1">Delivery Rate</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Message Templates</h2>
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                            <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
                                {['Appointment Confirmation', 'Appointment Reminder', 'Prescription Ready', 'Follow-up Reminder', 'Surgery Information', 'Lab Report Ready', 'Payment Reminder'].map((template, i) => (
                                    <button key={i} className="w-full text-left px-5 py-3 text-sm text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors flex items-center">
                                        <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                        {template}
                                    </button>
                                ))}
                            </div>
                            <button className="w-full p-3 text-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 border-t border-gray-100 dark:border-gray-700">
                                + Create New Template
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MessageCard({ initials, name, subtext, message, time, status, statusColor }: any) {
    const borderColor = statusColor === 'green' ? 'border-green-500' : statusColor === 'blue' ? 'border-blue-500' : 'border-orange-500';
    const textColor = statusColor === 'green' ? 'text-green-600' : statusColor === 'blue' ? 'text-blue-600' : 'text-orange-600';
    const bgClass = statusColor === 'green' ? 'bg-green-50 dark:bg-green-900/10' : statusColor === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10' : 'bg-orange-50 dark:bg-orange-900/10'; // Keep card white but maybe use these later if needed

    // Using white card with colored border-left as per screenshot appearance (actually screenshot has full border left)

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 ${borderColor} shadow-sm border-t border-r border-b border-gray-200 dark:border-gray-700`}>
            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${initials === 'AS' || initials === 'PP' ? 'bg-emerald-600' :
                            initials === 'RK' ? 'bg-blue-600' : 'bg-emerald-700'
                        }`}>
                        {initials}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h3>
                            <span className="text-xs text-gray-400">{subtext}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{message}</p>
                        <p className="text-xs text-gray-400 mt-2">{time}</p>
                    </div>
                </div>

                <div className={`flex items-center gap-1.5 ${textColor} text-xs font-bold`}>
                    {status === 'Delivered' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                    {status === 'Read' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                    {status === 'Pending' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    {status}
                </div>
            </div>
        </div>
    )
}
