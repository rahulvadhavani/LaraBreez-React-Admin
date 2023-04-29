import React, { useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Label, TextInput } from 'flowbite-react';
import BackButton from '@/Components/Admin/BackButton';
import PageHead from '@/Components/PageHead';
import Button from '@/Components/Button';
import { toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Index(props) {

    const { static_page_data, module, breadcrumbs } = usePage().props;
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: static_page_data.title || "",
        slug: static_page_data.slug || "",
        content: static_page_data.content || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("static-page.update"));
    }
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setData('content',data);
    }

    useEffect(() => {
        recentlySuccessful && toast.success("Data updated successfully.")
    }, [recentlySuccessful])

    return (
        <Authenticated
            auth={props.auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <form className="px-6" name="createForm" onSubmit={handleSubmit}>
                        <div className=''>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="content"
                                        value="content"
                                    />
                                </div>
                                <div>
                                    <CKEditor
                                        id="content"
                                        editor={ClassicEditor}
                                        data={data.content}
                                        onChange={handleEditorChange}
                                    />
                                </div>
                                <span className="text-red-600">
                                    {errors.content}
                                </span>
                            </div>
                        </div>
                        <input type="hidden" value={data.slug} name='id' />
                        <div className='mt-5 flex justify-center'>
                            <Button processing={processing} type='submit' name='update' onClick={handleSubmit}>Update</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
