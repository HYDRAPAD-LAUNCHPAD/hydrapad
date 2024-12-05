import { Dispatch, SetStateAction } from "react";

export interface Props {
    contactVisible: boolean;
    setContactVisible: Dispatch<SetStateAction<boolean>>;
}