import {Button, Tooltip} from '@material-ui/core';
import React, {ReactElement, VFC} from 'react';
import {FaPlus} from 'react-icons/all';

export interface AddDataProps {
    icon?: ReactElement;

    onTrigger: () => void;
}

export const AddData: VFC<AddDataProps> = ({icon = <FaPlus/>, onTrigger}) => {
    return <Tooltip title={'Click to add data'}>
        <Button className="absolute bottom-4 right-4 rounded-full text-2xl"
                variant="contained"
                color="primary"
                onClick={() => onTrigger()}
        >
            {icon}
        </Button>
    </Tooltip>;
};
