import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from "@/components/form/Buttons"
import { createProfileAction } from "@/utils/actions"
import { currentUser } from "@clerk/nextjs/server"

async function createProfilePage() {

    // get the current user
    const user = await currentUser();
    // if the user has  privatemeta hasProfile return to home page
    if (user?.privateMetadata?.hasProfile) redirect('/');

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div className="border p-8 rounded-md">
                <FormContainer action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormInput type="text" name="firstName" label="First Name" />
                        <FormInput type="text" name="lastName" label="Last Name" />
                        <FormInput type="text" name="username" label="Username" />
                    </div>
                    <SubmitButton text="Create Profile" className="mt-8" />
                </FormContainer >
            </div >
        </section >
    )
}

export default createProfilePage;
