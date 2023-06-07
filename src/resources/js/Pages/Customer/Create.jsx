import React from 'react';
import PostForm from "@/components/Customer/Form";

export default function Create(props) {

    const { customer, errors } = props;

    return (
        <PostForm type="create" customer={customer} errors={errors}></PostForm>
    );

}
