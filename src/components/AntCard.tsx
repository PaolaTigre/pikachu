import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

type CardType = {
    name:string,
    front_default:string,
    description:string,
    key:number
}

const AntCard:React.FC<CardType> = ({name,front_default, description,key}:CardType) => (
    <Card
        style={{ width: 200 }}
        cover={
            <img
                alt="example"
                src={front_default}
            />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            title={name}
            description={description}
        />
    </Card>
);

export default AntCard;
