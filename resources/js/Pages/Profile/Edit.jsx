import Authenticated from '@/Layouts/Authenticated'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import DeleteUserForm from './Partials/DeleteUserForm'
import Breadcrumbs from '@/Components/Admin/Breadcrumbs'

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <Authenticated
            title="Profile"
            auth={auth}
            header={
                <div className='flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Profile
                    </h2>
                    <Breadcrumbs modules={['Profile', 'Edit']}></Breadcrumbs>
                </div>
            }
        >
            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </Authenticated>
    )
}
