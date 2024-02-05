import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, } from '@syncfusion/ej2-react-schedule';
import { EventSettingsModel, } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
export default function Dashboard({ auth }: PageProps) {

    const eventSettings: EventSettingsModel = {
        dataSource: [
            { Id: 1, Subject: 'Event 1', StartTime: new Date(2024, 1, 5, 9, 0), EndTime: new Date(2024, 1, 5, 11, 0) },
            { Id: 2, Subject: 'Event 2', StartTime: new Date(2024, 1, 5, 12, 0), EndTime: new Date(2024, 1, 5, 14, 0) },
        ]
    }

    const dataManager = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/loadData',
        adaptor: new WebApiAdaptor(),
        crossDomain: true,
    })
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Painel</h2>}
        >
            <Head title="Dashboard" />

            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <h1 className='text-white text-center font-bold text-2xl'>Calendário</h1>
                    <ScheduleComponent currentView='Month' selectedDate={new Date(2024, 1, 5)}
                    eventSettings={eventSettings}
                    >
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
