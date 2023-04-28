import PerfectScrollbar from '@/Components/PerfectScrollbar'
import { DashboardIcon } from '@/Components/Icons/outline'
import {
    SidebarLink,
    SidebarCollapsibleItem,
    SidebarCollapsible,
} from '@/Components/Sidebar/Sidebar'
import { TemplateIcon } from '@heroicons/react/outline'
import { FaTachometerAlt, FaUserCircle, FaUsers } from 'react-icons/fa';

export default () => {
    return (
        <PerfectScrollbar
            tag="nav"
            className="flex flex-col flex-1 max-h-full gap-4 px-3"
        >
            <SidebarLink
                title={'Dashboard'}
                href={route('dashboard')}
                active={route().current('dashboard')}
                icon={
                    <FaTachometerAlt className='text-2xl' />
                }
            />
            <SidebarLink
                title={'Users'}
                href={route('users.index')}
                active={route().current('users.*')}
                icon={
                    <FaUsers className='text-2xl' />
                }
            />
            <SidebarLink
                title={'Profile'}
                href={route('profile.edit')}
                active={route().current('profile.*')}
                icon={
                    <FaUserCircle className='text-2xl' />
                }
            />

            {/* <SidebarCollapsible
                title="Components"
                active={route().current('components.*')}
                icon={<TemplateIcon aria-hidden="true" className="w-6 h-6" />}
            >
                <SidebarCollapsibleItem
                    href={route('components.buttons')}
                    title="Buttons"
                    active={route().current('components.buttons')}
                />
            </SidebarCollapsible> */}
        </PerfectScrollbar>
    )
}
