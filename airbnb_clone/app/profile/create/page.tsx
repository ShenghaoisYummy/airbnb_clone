import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/Forminput"
import { SubmitButton } from "@/components/form/Buttons"
import { createProfileAction } from "@/app/utils/actions"

function createProfilePage() {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div className="border p-8 rounded-md max-w-lg">
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
