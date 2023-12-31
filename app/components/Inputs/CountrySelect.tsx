"use client";
import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export type CountrySelectedValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectedProps {
  value?: CountrySelectedValue;
  onChange: (value: CountrySelectedValue) => void;
}
const CountrySelect: React.FC<CountrySelectedProps> = ({
  value,
  onChange,
}: CountrySelectedProps) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectedValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag }</div>
            <div>
              {option.label},
              <span className="text-netral-800 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
            control: () => 'p-3 border-2',
            input: () => 'text-lg',
            option: () => 'text-lg'
        }}
        theme={(theme) => ({
            ...theme,
            borderRadius:6,
            colors: {
                ...theme.colors,
                primary: 'black',
                primary25: '#ffe4e6'
            }
        })}
      />
    </div>
  );
};

export default CountrySelect;
