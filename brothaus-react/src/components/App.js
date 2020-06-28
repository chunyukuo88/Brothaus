import React from 'react';
import { AccountContextWrapper } from "../contexts/account-context";
import Status from "./loginStatus/Status";
import Settings from "./loginStatus/Settings";
import Heading from "./Heading";
import Foto from "./Foto";

export default () => {

    return (
        <>
            <AccountContextWrapper>
                <Heading />
                <Status />

                <Settings />
                <Foto />
            </AccountContextWrapper>
        </>
    );
}
