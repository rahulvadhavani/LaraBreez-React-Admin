import PerfectScrollbar from '@/Components/PerfectScrollbar'
import {
    SidebarLink,
    SidebarCollapsibleItem,
    SidebarCollapsible,
} from '@/Components/Sidebar/Sidebar'
import { TemplateIcon } from '@heroicons/react/outline'

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
                    <i className="text-xl fa-solid fa-tachometer-alt"></i>
                }
            />
            <SidebarLink
                title={'Users'}
                href={route('users.index')}
                active={route().current('users.*')}
                icon={
                    <i className="text-xl fa-solid fa-users"></i>
                }
            />
            <SidebarLink
                title={'Profile'}
                href={route('profile.edit')}
                active={route().current('profile.*')}
                icon={
                    <i className="text-xl fa-solid fa-user-circle"></i>
                }
            />

            <SidebarCollapsible
                title="Static Page"
                active={route().current('static-page.*')}
                icon={<i class="text-xl fa-solid fa-compass-drafting"></i>}
            >
                <SidebarCollapsibleItem
                    href={route('static-page.index', { slug: 'about-us' })}
                    title="About Us"
                    active={route().current('static-page.index', { slug: 'about-us' })}
                />
                <SidebarCollapsibleItem
                    href={route('static-page.index', { slug: 'terms-condition' })}
                    title="Terms And Condition"
                    active={route().current('static-page.index', { slug: 'terms-condition' })}
                />
                <SidebarCollapsibleItem
                    href={route('static-page.index', { slug: 'privacy-policy' })}
                    title="Privacy Policy"
                    active={route().current('static-page.index', { slug: 'privacy-policy' })}
                />
            </SidebarCollapsible>
        </PerfectScrollbar>
    )
}
