import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Prisma } from "@prisma/client";

const name = Prisma.PropertyScalarFieldEnum.price;

type PriceInputProps = {
  defaultValue?: number;
};

function PriceInput(props: PriceInputProps) {
  const { defaultValue } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        placeholder="Enter price"
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
