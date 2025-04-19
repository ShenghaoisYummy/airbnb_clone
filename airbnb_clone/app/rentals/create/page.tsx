import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInpyt from "@/components/form/CategoriesInpyt";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";
import CounterInput from "@/components/form/CounterInput";

function CreatePropertyPage() {
  return (
    <section className="py-12">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create Property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium capitalize">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
            <PriceInput />
            <CategoriesInpyt />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description(10 - 1000 words)"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accommodation Details
          </h3>

          <CounterInput detail="Bedrooms" defaultValue={0} />
          <CounterInput detail="Bathrooms" defaultValue={0} />
          <CounterInput detail="Guests" defaultValue={0} />
          <CounterInput detail="Bedrooms" defaultValue={0} />

          <SubmitButton text="Create Property" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
