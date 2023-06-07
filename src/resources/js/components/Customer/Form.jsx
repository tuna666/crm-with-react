import React, { useState } from 'react';
// import Label from "@/Components/Label";
import {Link, useForm} from "@inertiajs/react";
import {Inertia} from "@inertiajs/inertia";
import Loading from "@/Components/Loading";
import _ from 'lodash';

export default function Form(props) {

    // Data
    const type = props.type; // create or edit
    const customer = props.customer;
    const errors = props.errors;
    const { data, setData } = useForm({
        last_name: _.get(customer, 'last_name', ''),
        first_name: _.get(customer, 'first_name', ''),
        email: _.get(customer, 'email', ''),
        memo: _.get(customer, 'memo', ''),
    });
    const [loading, setLoading] = useState(false);

    // Methods
    const onFinish = () => setLoading(false);
    const onSubmit = () => {

        setLoading(true);

        if(type === 'create') { // 登録 or 変更で切り替える

            const url = route('customer.store');
            Inertia.post(url, data, { onFinish });

        } else if(type === 'edit') {

            const url = route('customer.update', props.customer.id);
            Inertia.put(url, data, { onFinish });

        }

    };

    return (
        <div className="p-4">
            <div className="mb-3">
                <label>性</label>
                <input className="w-80 border border-gray-500 p-2 rounded" value={data.last_name} onChange={e => setData('last_name', e.target.value)} />
                {errors.last_name && <div className="mt-2 text-red-500 bg-red-100 p-2 rounded">{errors.last_name}</div>}
            </div>
            <div className="mb-3">
                <label>名</label>
                <input className="w-80 border border-gray-500 p-2 rounded" value={data.first_name} onChange={e => setData('first_name', e.target.value)} />
                {errors.first_name && <div className="mt-2 text-red-500 bg-red-100 p-2 rounded">{errors.first_name}</div>}
            </div>
            <div className="mb-3">
                <label>email</label>
                <input className="w-80 border border-gray-500 p-2 rounded" value={data.email} onChange={e => setData('email', e.target.value)} />
                {errors.email && <div className="mt-2 text-red-500 bg-red-100 p-2 rounded">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <label>顧客情報</label>
                <textarea className="w-80 border border-gray-500 p-2 rounded" value={data.memo} onChange={e => setData('memo', e.target.value)} />
                {errors.memo && <div className="mt-2 text-red-500 bg-red-100 p-2 rounded">{errors.memo}</div>}
            </div>
            <button type="button" className="text-white bg-blue-700 rounded-lg text-sm px-4 py-2 mr-5" onClick={onSubmit}>送信する</button>
            <Link href={route('customer.index')}>戻る</Link>
            <br />
            <Loading show={loading}></Loading>
        </div>
    );

}
