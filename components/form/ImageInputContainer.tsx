"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";
import { LuUser } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

// Image input container component
export function ImageInputContainer(props: ImageInputContainerProps) {
  // Destructure props
  const { image, name, action, text, children } = props;

  // State to control if the update form is visable
  const [isUpdateFormVisiable, setIsUpdateFormVisiable] = useState(false);

  // User icon
  const userIcon = (
    <LuUser className="w-24 h-24 bg-primary rounded text-white mb=4" />
  );
  // Render if image is available otherwise render user icon
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisiable((prev) => !prev)}
      >
        {text}
      </Button>
      {/* if isUpdateFormVisiable is tru, shows update form, */}
      {isUpdateFormVisiable && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton text="Update" size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
