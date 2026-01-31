'use client';

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics & CRM</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Patient insights and performance analytics
                </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard title="Patient Satisfaction" value="94%" color="blue" icon="thumbs-up" />
                <KPICard title="On Time Appointments" value="87%" color="green" icon="calendar" />
                <KPICard title="Avg Consultation Time" value="18 min" color="purple" icon="clock" />
                <KPICard title="Revenue Growth" value="+18%" color="orange" icon="trending-up" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Patient Flow by Location */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-6">Patient Flow by Location</h2>
                    <div className="space-y-6">
                        <FlowBar label="Apollo Hospital" count="146 patients" percentage={45} color="blue" />
                        <FlowBar label="Fortis Hospital" count="92 patients" percentage={28} color="blue" />
                        <FlowBar label="City Clinic" count="57 patients" percentage={18} color="blue" />
                        <FlowBar label="Max Hospital" count="32 patients" percentage={9} color="blue" />
                    </div>
                </div>

                {/* Most Common Conditions */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-6">Most Common Conditions</h2>
                    <div className="space-y-4">
                        <ConditionItem name="Knee Arthritis" cases="45 cases this month" change="+12%" />
                        <ConditionItem name="ACL Tear" cases="32 cases this month" change="+8%" />
                        <ConditionItem name="Shoulder Pain" cases="25 cases this month" change="+3%" />
                        <ConditionItem name="Hip Replacement" cases="24 cases this month" change="+15%" />
                    </div>
                </div>
            </div>

            {/* AI Driven Insights */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">AI-Driven Insights</h2>
                <div className="space-y-3">
                    <InsightAlert
                        type="High"
                        title="Follow-up Alert"
                        message="12 patients need follow-up reminders this week."
                        color="red"
                    />
                    <InsightAlert
                        type="Medium"
                        title="Revenue Trend"
                        message="OPD revenue increased by 18% compared to last month."
                        color="orange"
                    />
                    <InsightAlert
                        type="Low"
                        title="Patient Flow"
                        message="Apollo Hospital shows highest patient volume on Tuesdays."
                        color="blue"
                    />
                </div>
            </div>
        </div>
    );
}

function KPICard({ title, value, color, icon }: any) {
    const bgClass =
        color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' :
            color === 'green' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' :
                    'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
            </div>
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${bgClass}`}>
                {/* Simple icons based on name */}
                <div className="font-bold text-lg">
                    {icon === 'thumbs-up' && '👍'}
                    {icon === 'calendar' && '📅'}
                    {icon === 'clock' && '⏰'}
                    {icon === 'trending-up' && '📈'}
                </div>
            </div>
        </div>
    )
}

function FlowBar({ label, count, percentage, color }: any) {
    return (
        <div>
            <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{count}</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <div className="text-xs text-gray-400">{percentage}% of total patients</div>
        </div>
    )
}

function ConditionItem({ name, cases, change }: any) {
    return (
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{cases}</div>
            </div>
            <div className="text-xs font-bold text-green-600 dark:text-green-400">{change}</div>
        </div>
    )
}

function InsightAlert({ type, title, message, color }: any) {
    const borderClass = color === 'red' ? 'border-red-500' : color === 'orange' ? 'border-orange-500' : 'border-blue-500';
    const bgClass = color === 'red' ? 'bg-red-50 dark:bg-red-900/10' : color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/10' : 'bg-blue-50 dark:bg-blue-900/10';
    const textClass = color === 'red' ? 'text-red-700 dark:text-red-400' : color === 'orange' ? 'text-orange-700 dark:text-orange-400' : 'text-blue-700 dark:text-blue-400';
    const badgeClass = color === 'red' ? 'bg-red-100 text-red-800' : color === 'orange' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800';

    return (
        <div className={`p-4 rounded-lg border-l-4 ${borderClass} ${bgClass} flex items-start gap-3`}>
            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${badgeClass}`}>{title}</span>
            <div>
                <span className={`text-xs font-bold mr-2 uppercase ${textClass}`}>{type}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{message}</span>
            </div>
        </div>
    )
}
