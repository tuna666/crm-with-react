import React from "react";
import { Link } from '@inertiajs/react';

export default function Show(props) {

    const { id, last_name, first_name, memo } = props.customer;

    return (
        <div className="p-4">
            <h1 className="font-bold mb-3">{id}</h1>
            <div className="mb-3">{last_name} {first_name}</div>
            <div className="mb-3">{memo}</div>
            <Link className="text-white bg-blue-700 rounded-lg text-sm px-4 py-2" href={route('customer.index')}>戻る</Link>
        </div>
    );
}
