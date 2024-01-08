import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onFilter: (filterText: string) => void;
}

const FilterInput = ({ onFilter }: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onFilter(ref.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={10}
                    placeholder="Filter games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default FilterInput;
