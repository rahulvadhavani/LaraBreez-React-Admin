import PageHead from '@/Components/PageHead';
import Authenticated from '@/Layouts/Authenticated'
import { Head, Link, usePage } from '@inertiajs/react';

export default (props) => {
    const { statisticsData, module, breadcrumbs } = usePage().props;
    return (
        <Authenticated
            title="Dashboard"
            auth={props.auth}
            errors={props.errors}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="h-[70vh] p-6 overflow-hidden rounded-md shadow-md dark:bg-dark-eval-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 text-gray-900 dark:text-gray-100">
                            {statisticsData.statistics.map((statistic, key) => {
                                return <Link key={key} href={statistic.route}>
                                    <div className={'pl-1 w-auto h-24 bg-green-400 rounded-lg shadow-md ' + statistic.className}>
                                        <div className="flex w-full h-full py-2 px-4 bg-white dark:bg-gray-700 rounded-lg justify-between">
                                            <div className="my-auto">
                                                <p className="font-bold">{statistic.module}</p>
                                                <p className="text-lg">{statistic.count}</p>
                                            </div>
                                            <div className="my-auto">
                                                <i className={'h-6 w-6 fa ' + statistic.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    )
}
