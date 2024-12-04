import { NFTCardType } from '@/pages/launchpad/allpresales/list/NFTCard';
import { StylesConfig } from 'react-select';

export const multiSelectStyle: StylesConfig = {
  control: (styles) => ({ ...styles, backgroundColor: 'rgb(33 30 44 / var(--tw-bg-opacity))', border: "none" }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? "#534e64"
          : isFocused
            ? "#534e64"
            : undefined,
      color: isDisabled
        ? '#ccc'
        : "white",
      cursor: isDisabled ? 'not-allowed' : 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? "#534e64"
          : undefined,
      },
    };
  },
  multiValue: (styles) => {

    return {
      ...styles,
      backgroundColor: "#475569",

    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "white"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    // color: data.color,
    ':hover': {
      backgroundColor: "#353539",
      color: 'white',
    },
  }),
  menu: styles => ({ ...styles, backgroundColor: "rgb(33 30 44 / var(--tw-bg-opacity))" })
};

export const presaleData: NFTCardType[] = [
  { id: '1', name: "PINGO", avatar: "/assets/images/avatars/a.png", type: "Regular Presale", step: "Live", progress: 70 },
  { id: '2', name: "PINGO", avatar: "/assets/images/avatars/a.png", type: "Regular Presale", step: "Upcoming", progress: 70 },
  { id: '3', name: "PINGO", avatar: "/assets/images/avatars/a.png", type: "Fair Launch", step: "Live", progress: 70 },
  { id: '4', name: "PINGO", avatar: "/assets/images/avatars/a.png", type: "Regular Presale", step: "Completed", progress: 70 },
  { id: '5', name: "PINGO", avatar: "/assets/images/avatars/a.png", type: "Fair Launch", step: "Upcoming", progress: 70 },
  { id: '6', name: "PINGO", avatar: "/assets/images/avatars/a.png", type: "Regular Presale", step: "Live", progress: 70 },
]