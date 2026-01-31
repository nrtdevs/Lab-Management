'use client';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome, Dr. Ankit Meshram</h1>
                        <p className="text-purple-100 text-sm sm:text-base opacity-90">
                            Orthopedic Surgeon • Smart Clinical Management System
                        </p>
                        <p className="text-purple-200 text-xs mt-1">
                            Today is Saturday, 31 January 2026
                        </p>
                    </div>
                    <div className="hidden sm:flex h-12 w-12 rounded-full bg-white/20 items-center justify-center backdrop-blur-sm border border-white/30 text-lg font-bold">
                        AM
                    </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardStatCard
                    title="Total Patients"
                    value="1,247"
                    change="+12%"
                    icon="users"
                    color="blue"
                />
                <DashboardStatCard
                    title="Today's Appointments"
                    value="24"
                    subtext="8 pending"
                    icon="calendar"
                    color="purple"
                />
                <DashboardStatCard
                    title="Monthly Revenue"
                    value="₹8.5L"
                    change="+18%"
                    icon="currency"
                    color="green"
                />
                <DashboardStatCard
                    title="Active Cases"
                    value="156"
                    subtext="12 surgeries"
                    icon="activity"
                    color="orange"
                />
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-4">
                    <ActionButton label="New Patient" color="blue" />
                    <ActionButton label="Schedule Appointment" color="purple" />
                    <ActionButton label="Create Prescription" color="green" />
                    <ActionButton label="Send WhatsApp" color="emerald" />
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Today's Appointments */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Today's Appointments</h2>
                        <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">View All →</button>
                    </div>
                    <div className="space-y-3">
                        <AppointmentRow
                            initials="AS" name="Amit Sharma" reason="Follow-up • Knee Replacement"
                            time="10:30 AM" status="Waiting"
                        />
                        <AppointmentRow
                            initials="PP" name="Priya Patel" reason="First Visit • ACL Tear"
                            time="11:00 AM" status="In Progress"
                        />
                        <AppointmentRow
                            initials="RK" name="Rajesh Kumar" reason="Follow-up • Shoulder Pain"
                            time="11:30 AM" status="Scheduled"
                        />
                        <AppointmentRow
                            initials="SR" name="Sneha Reddy" reason="Consultation • Hip Arthritis"
                            time="12:00 PM" status="Scheduled"
                        />
                    </div>

                    {/* Performance Section */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">This Month's Performance</h2>
                        <div className="space-y-6">
                            <ProgressBar label="OPD Consultations" current="245" total="300" color="blue" />
                            <ProgressBar label="Surgeries Completed" current="18" total="20" color="green" />
                            <ProgressBar label="Revenue Target" current="₹8.5L" total="₹10L" color="purple" />
                        </div>
                    </div>
                </div>

                {/* Right Column - Upcoming Surgeries */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Upcoming Surgeries</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700/50">
                        <SurgeryCard
                            name="Ramesh Gupta"
                            procedure="Total Knee Replacement"
                            hospital="Apollo Hospital"
                            date="Jan 30, 2026"
                            border="orange"
                        />
                        <SurgeryCard
                            name="Meera Singh"
                            procedure="ACL Reconstruction"
                            hospital="Fortis Hospital"
                            date="Feb 1, 2026"
                            border="blue"
                        />
                        <SurgeryCard
                            name="Vikram Joshi"
                            procedure="Hip Replacement"
                            hospital="Max Hospital"
                            date="Feb 3, 2026"
                            border="purple"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DashboardStatCard({ title, value, change, subtext, icon, color }: any) {
    const iconBg =
        color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' :
            color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400' :
                color === 'green' ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400' :
                    'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
                {change && <span className="text-xs font-bold text-green-600 dark:text-green-400">{change}</span>}
                {subtext && <span className="text-xs text-gray-400">{subtext}</span>}
            </div>
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBg}`}>
                {/* Simple Icons */}
                <div className="text-lg">
                    {icon === 'users' && '👥'}
                    {icon === 'calendar' && '📅'}
                    {icon === 'currency' && '₹'}
                    {icon === 'activity' && '🏥'}
                </div>
            </div>
        </div>
    )
}

function ActionButton({ label, color }: any) {
    const bgClass =
        color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
            color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                    'bg-emerald-600 hover:bg-emerald-700';

    return (
        <button className={`${bgClass} text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm`}>
            {label}
        </button>
    )
}

function AppointmentRow({ initials, name, reason, time, status }: any) {
    const statusColor =
        status === 'Waiting' ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' :
            status === 'In Progress' ? 'text-green-600 bg-green-50 dark:bg-green-900/20' :
                'text-blue-600 bg-blue-50 dark:bg-blue-900/20';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">
                    {initials}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{reason}</p>
                </div>
            </div>
            <div className="text-right">
                <div className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 ${statusColor}`}>
                    {status}
                </div>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{time}</div>
            </div>
        </div>
    )
}

function ProgressBar({ label, current, total, color }: any) {
    const barColor =
        color === 'blue' ? 'bg-blue-600' :
            color === 'green' ? 'bg-green-600' :
                'bg-purple-600';

    // Calculate generic width for demo (parsing numbers roughly)
    const width = "80%";

    return (
        <div>
            <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                <span className="text-xs font-bold text-gray-900 dark:text-white">{current} <span className="text-gray-400 font-normal">/ {total}</span></span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div className={`h-2 rounded-full ${barColor}`} style={{ width }}></div>
            </div>
        </div>
    )
}

function SurgeryCard({ name, procedure, hospital, date, border }: any) {
    const borderClass =
        border === 'orange' ? 'border-l-4 border-orange-500' :
            border === 'blue' ? 'border-l-4 border-blue-500' :
                'border-l-4 border-purple-500';

    return (
        <div className={`p-4 ${borderClass}`}>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h4>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{procedure}</div>
            <div className="flex justify-between items-center mt-3">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                    {hospital}
                </span>
                <span className="text-xs font-bold text-gray-400">{date}</span>
            </div>
        </div>
    )
}
